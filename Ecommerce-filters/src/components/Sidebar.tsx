import type React from "react";

interface SidebarProps {
  categories: string[];
  keyWords: string[];
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  minPrice: number | undefined;
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  maxPrice: number | undefined;
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedKeyWord: string;
  setSelectedKeyWord: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar = ({
  categories,
  keyWords,
  searchQuery,
  setSearchQuery,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  selectedCategory,
  setSelectedCategory,
  selectedKeyWord,
  setSelectedKeyWord,
}: SidebarProps) => {
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setSelectedCategory("");
    setSelectedKeyWord("");
  };
  return (
    <aside className="w-64 p-5 h-screen border-r flex-1/4">
      <section className="flex flex-col justify-center gap-3">
        <input
          type="text"
          placeholder="Search Product"
          value={searchQuery ?? ""}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-2 py-2 sm:mb-0 w-full"
        />
        <div className="flex items-center justify-center gap-2">
          <input
            type="number"
            min={1}
            placeholder="₹ Min"
            value={minPrice ?? ""}
            onChange={handleMinPriceChange}
            className="border rounded px-5 py-3 w-full"
          />
          <input
            type="number"
            min={1}
            placeholder="₹ Max"
            value={maxPrice ?? ""}
            onChange={handleMaxPriceChange}
            className="border rounded px-5 py-3 w-full"
          />
        </div>

        {/* Categories */}

        <div className="mt-5">
          <h2 className="font-semibold text-xl mb-3">Categories</h2>
        </div>
        <div>
          {categories.map((category) => {
            return (
              <label
                className="flex items-center mb-2 cursor-pointer"
                key={category}
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="mr-2 w-4 h-4"
                />
                {category.toUpperCase()}
              </label>
            );
          })}
        </div>

        {/* Keywords Section */}
        <div>
          <h2 className="text-xl mb-3 font-semibold">Keywords</h2>
        </div>
        <div className="mb-3">
          {keyWords.map((each) => {
            return (
              <label
                key={each}
                className="flex items-center mb-2 capitalize cursor-pointer"
              >
                <input
                  type="radio"
                  name="keyword"
                  className="mr-2 w-4 h-4"
                  value={each}
                  checked={selectedKeyWord === each}
                  onChange={(e) => setSelectedKeyWord(e.target.value)}
                />
                {each}
              </label>
            );
          })}
        </div>

        <button
          className="bg-black text-white rounded w-full p-2 cursor-pointer"
          type="button"
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </section>
    </aside>
  );
};

export default Sidebar;
