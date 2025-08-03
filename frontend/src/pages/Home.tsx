import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Plus, Key } from "lucide-react";
import axios from "axios";
import {
  addMedia,
  fetchMedia,
  deleteMedia,
  updateMedia,
} from "../services/api";

const initialData = [
  {
    id: 1,
    title: "Inception",
    type: "Movie",
    director: "Nolan",
    budget: 160000000,
    location: "LA, Paris",
    duration: 148,
    year: 2010,
  },
  {
    id: 2,
    title: "Breaking Bad",
    type: "TV Show",
    director: "Gilligan",
    budget: 30000000,
    location: "Albuquerque",
    duration: 49,
    year: 2008,
  },
];

type Media = {
  id: number;
  title: string;
  type: string;
  director: string;
  budget: number;
  location: string;
  duration: number;
  year: number;
};
type MediaInput = Omit<Media, "id">;

export default function Home() {
  const [mediaList, setMediaList] = useState<Media[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newEntry, setNewEntry] = useState<
    (MediaInput & { id?: number }) | null
  >(null);
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const TAKE = 30;

  const [editBuffer, setEditBuffer] = useState<Partial<Media>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMedia(page * TAKE, TAKE);
        if (response.length < TAKE) {
          setHasMore(false);
        }
        setMediaList((prev) => [...prev, ...response]);
      } catch (error) {
        console.error("Error fetching media data:", error);
      }
    };

    fetchData();
  }, [page]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100 && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  const handleAdd = () => {
    const tempId = Date.now();
    setNewEntry({
      // id: tempId,
      title: "",
      type: "",
      director: "",
      budget: 0,
      location: "",
      duration: 0,
      year: 0,
    });
    setEditingId(tempId);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof Media,
  ) => {
    let value: string | number = e.target.value;
    if (key === "budget" || key === "duration" || key === "year") {
      value = Number(e.target.value);
    }
    if (newEntry) {
      setNewEntry({ ...newEntry, [key]: value });
    } else {
      setEditBuffer({ ...editBuffer, [key]: value });
    }
  };

  const handleKeyDown = async (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: number,
  ) => {
    if (e.key === "Enter") {
      const confirm1 = window.confirm("Are you sure you want to save?");
      if (!confirm1) return;
      const confirm2 = window.confirm("Really sure?");
      if (!confirm2) return;

      if (newEntry && newEntry.id === id) {
        const { id: tempId, ...payload } = newEntry;
        const response = await addMedia(payload);
        setMediaList([...mediaList, response]);
        setNewEntry(null);
      } else {
        try {
          const updated = await updateMedia(id, editBuffer as MediaInput);
          setMediaList((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, ...updated } : item,
            ),
          );
        } catch (error) {
          alert("Please fill all fields before saving.");
        }
      }
      setEditingId(null);
      setEditBuffer({});
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteMedia(id);
      setMediaList((prev) => prev.filter((item) => item.id !== id));
      if (newEntry && newEntry.id === id) {
        setNewEntry(null);
      }
      if (editingId === id) {
        setEditingId(null);
        setEditBuffer({});
      }
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Media Table</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center"
        >
          <Plus className="mr-1" /> Add
        </button>
      </div>
      <div
        className="overflow-x-auto border border-gray-300 rounded-lg shadow   max-h-[400px] md:max-h-[400px] sm:max-h-[300px]"
        // style={{ maxHeight: "500px" }}
      >
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left sticky top-0 z-10 border-b">
              {[
                "Title",
                "Type",
                "Director",
                "Budget",
                "Location",
                "Duration",
                "Year/Time",
                "Actions",
              ].map((heading, index) => (
                <th key={index} className="p-2 border-b">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ...mediaList, ...(newEntry ? [newEntry] : [])
            ].map((media,id) => (
              <tr
                key={id}
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => {
                  if (!newEntry && media.id !== undefined) {
                    setEditingId(media.id);
                    setEditBuffer(media);
                  }
                }}
              >
                {(
                  [
                    "title",
                    "type",
                    "director",
                    "budget",
                    "location",
                    "duration",
                    "year",
                  ] as (keyof Media)[]
                ).map((key) => (
                  <td key={key} className="p-2 border-b">
                    {editingId === media.id ? (
                      <input
                        className="w-full border px-2 py-1"
                        value={
                          (newEntry && newEntry[key]) || editBuffer[key] || ""
                        }
                        onChange={(e) => handleChange(e, key)}
                        onKeyDown={(e) => handleKeyDown(e, media.id ?? 0)}
                        placeholder={`Enter ${key}`}
                        autoComplete="off"
                        autoCorrect="off"
                        spellCheck="false"
                        // autoFocus={editingId === media.id} // Uncomment if you want to focus on
                        autoFocus
                      />
                    ) : (
                      media[key]
                    )}
                  </td>
                ))}
                <td className="p-2 border-b space-x-2">
                  {editingId !== media.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingId(media.id ?? null);
                        setEditBuffer(media);
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Pencil size={18} />
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(media.id ?? 0);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
