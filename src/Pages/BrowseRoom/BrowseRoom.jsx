// import { useLoaderData } from "react-router";
// import PostCard from "../Home/FeaturedPost/PostCard";
// import { useState, useEffect } from "react";
// import { Funnel, Search, X } from "lucide-react";

// const BrowseRoom = () => {
//     const originalData = useLoaderData();
//     const [roomData, setRoomData] = useState(originalData);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [selectedRoomType, setSelectedRoomType] = useState("Filter by Room Type");

//     // Get unique room types from the data
//     const getRoomTypes = () => {
//         const types = originalData?.data?.map(room => room.roomType) || [];
//         return [...new Set(types)].filter(type => type && type.trim() !== "");
//     };

//     // Filter and search functionality
//     useEffect(() => {
//         let filteredData = originalData?.data || [];

//         // Apply search filter (search in title, preferences, and location)
//         if (searchTerm.trim() !== "") {
//             filteredData = filteredData.filter(room => {
//                 const searchFields = `${room.title || ''} ${room.preferences || ''} ${room.location || ''}`.toLowerCase();
//                 return searchFields.includes(searchTerm.toLowerCase());
//             });
//         }

//         // Apply room type filter
//         if (selectedRoomType !== "Filter by Room Type") {
//             filteredData = filteredData.filter(room => 
//                 room.roomType === selectedRoomType
//             );
//         }

//         setRoomData({ ...originalData, data: filteredData });
//     }, [searchTerm, selectedRoomType, originalData]);

//     // Handle search input change
//     const handleSearchChange = (e) => {
//         setSearchTerm(e.target.value);
//     };

//     // Handle search button click
//     const handleSearchBtn = () => {
//         // Search is already handled by useEffect, but you can add additional logic here if needed
//         console.log("Search triggered for:", searchTerm);
//     };

//     // Handle filter change
//     const handleFilterChange = (e) => {
//         setSelectedRoomType(e.target.value);
//     };

//     // Clear search
//     const handleClearSearch = () => {
//         setSearchTerm("");
//     };

//     // Clear filter
//     const handleClearFilter = () => {
//         setSelectedRoomType("Filter by Room Type");
//     };

//     return (
//         <div className="max-w-[1515px] mx-auto w-11/12">
//             <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 mt-10 group">
//                 <h1 className="text-xl lg:text-2xl text-primary font-bold uppercase drop-shadow-lg text-center sm:w-max pri-font mx-auto">
//                     Browse Posts
//                 </h1>
//                 {/* Search and Filter Functionality */}
//                 <div className="contain px-2 md:px-4 pt-3 md:pt-5 pb-2 md:pb-4">
//                     <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-4">
//                         <div className="flex items-center gap-2 w-full sm:w-1/2 relative">
//                             <input
//                                 type="text"
//                                 name="search"
//                                 value={searchTerm}
//                                 onChange={handleSearchChange}
//                                 className="input input-xs md:input-md rounded-md focus:outline-secondary border focus:border-0 w-full mx-auto sm:m-0 pr-20 bg-[var(--card-bg)]"
//                                 placeholder="Search by title, location, or preferences (e.g., Austin, tech hub, non-smoker)"
//                             />
//                             <div className="absolute right-2 z-10 flex gap-2 items-center">
//                                 <button
//                                     onClick={handleClearSearch}
//                                     type="button"
//                                     className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
//                                     title="Clear search"
//                                 >
//                                     <X className="size-3 md:size-4" />
//                                 </button>
//                                 <button
//                                     onClick={handleSearchBtn}
//                                     type="button"
//                                     className="rounded-full p-1 hover:bg-secondary hover:text-black transition font-normal"
//                                     title="Search"
//                                 >
//                                     <Search className="size-3 md:size-4" />
//                                 </button>
//                             </div>
//                         </div>
//                         <div className="flex items-center gap-2 w-full sm:w-1/2 relative">
//                             <select
//                                 value={selectedRoomType}
//                                 onChange={handleFilterChange}
//                                 name="roomType"
//                                 className="cursor-pointer appearance-none select select-neutral select-xs md:select-md block w-full rounded-md border focus:border-0 placeholder:font-medium focus:border-none focus:outline-secondary bg-[var(--card-bg)]"
//                             >
//                                 <option value="Filter by Room Type" disabled>
//                                     Filter by Room Type
//                                 </option>
//                                 {getRoomTypes().map((roomType, index) => (
//                                     <option key={index} value={roomType}>
//                                         {roomType}
//                                     </option>
//                                 ))}
//                             </select>
//                             <div className="absolute right-2 z-10 flex gap-2 items-center">
//                                 <button
//                                     onClick={handleClearFilter}
//                                     type="button"
//                                     className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
//                                     title="Clear filter"
//                                 >
//                                     <X className="size-3 md:size-4" />
//                                 </button>
//                                 <button
//                                     className="rounded-full p-1 bg-base-100 hover:bg-secondary hover:text-black transition font-normal"
//                                     title="Filter"
//                                 >
//                                     <Funnel className="size-3 md:size-4" />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Results Count */}
//                     <div className="mt-2 md:mt-3 text-xs md:text-sm sec-font">
//                         Showing {roomData?.data?.length || 0} rooms
//                         {searchTerm && ` matching "${searchTerm}"`}
//                         {selectedRoomType !== "Filter by Room Type" && ` (${selectedRoomType})`}
//                     </div>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {roomData?.data?.map((post, index) => (
//                         <PostCard
//                             key={post._id}
//                             post={post}
//                             index={index}
//                         ></PostCard>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BrowseRoom;




import { useLoaderData } from "react-router";
import PostCard from "../Home/FeaturedPost/PostCard";
import { useState, useEffect } from "react";
import { Funnel, Search, X } from "lucide-react";

const BrowseRoom = () => {
    const originalData = useLoaderData();
    const [roomData, setRoomData] = useState(originalData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedRoomType, setSelectedRoomType] = useState("Filter by Room Type");
    const [sortOrder, setSortOrder] = useState("");

    // Safely extract numeric rent value from rentAmount field
    const getNumericRent = (room) => {
        const rentStr = room?.rentAmount;
        if (!rentStr || typeof rentStr !== "string") return 0;
        const cleaned = rentStr.replace(/[^\d]/g, "");
        return parseInt(cleaned, 10) || 0;
    };

    const getRoomTypes = () => {
        const types = originalData?.data?.map(room => room.roomType) || [];
        return [...new Set(types)].filter(type => type && type.trim() !== "");
    };

    useEffect(() => {
        let filteredData = originalData?.data || [];

        // Apply search filter
        if (searchTerm.trim() !== "") {
            filteredData = filteredData.filter(room => {
                const searchFields = `${room.title || ''} ${room.preferences || ''} ${room.location || ''}`.toLowerCase();
                return searchFields.includes(searchTerm.toLowerCase());
            });
        }

        // Apply room type filter
        if (selectedRoomType !== "Filter by Room Type") {
            filteredData = filteredData.filter(room => room.roomType === selectedRoomType);
        }

        // Apply rent sorting
        if (sortOrder === "lowToHigh") {
            filteredData = [...filteredData].sort((a, b) => getNumericRent(a) - getNumericRent(b));
        } else if (sortOrder === "highToLow") {
            filteredData = [...filteredData].sort((a, b) => getNumericRent(b) - getNumericRent(a));
        }

        setRoomData({ ...originalData, data: filteredData });
    }, [searchTerm, selectedRoomType, sortOrder, originalData]);

    const handleSearchChange = (e) => setSearchTerm(e.target.value);
    const handleSearchBtn = () => console.log("Search for:", searchTerm);
    const handleFilterChange = (e) => setSelectedRoomType(e.target.value);
    const handleSortChange = (e) => setSortOrder(e.target.value);
    const handleClearSearch = () => setSearchTerm("");

    return (
        <div className="max-w-[1515px] mx-auto w-11/12">
            <div className="rounded-lg p-2 pt-0 md:p-5 md:pt-0 mt-10 group">
                <h1 className="text-xl lg:text-2xl text-primary font-bold uppercase drop-shadow-lg text-center sm:w-max pri-font mx-auto">
                    Browse Posts
                </h1>

                {/* Search + Filter + Sort */}
                <div className="contain px-2 md:px-4 pt-3 md:pt-5 pb-2 md:pb-4">
                    <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 mb-2 md:mb-4">

                        {/* Search */}
                        <div className="flex items-center gap-2 w-full sm:w-1/2 relative">
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="input input-xs md:input-md rounded-md  border focus:border-0 w-full pr-20 bg-[var(--card-bg)]"
                                placeholder="Search by title, location, or preferences"
                            />
                            <div className="absolute right-2 z-10 flex gap-2 items-center">
                                <button
                                    onClick={handleClearSearch}
                                    type="button"
                                    className="rounded-full p-1 hover:bg-error hover:text-black transition font-normal"
                                    title="Clear search"
                                >
                                    <X className="size-3 md:size-4" />
                                </button>
                                <button
                                    onClick={handleSearchBtn}
                                    type="button"
                                    className="rounded-full p-1 hover:bg-secondary hover:text-black transition font-normal"
                                    title="Search"
                                >
                                    <Search className="size-3 md:size-4" />
                                </button>
                            </div>
                        </div>

                        {/* Room Type + Sort */}
                        <div className="flex items-center gap-2 w-full sm:w-1/2">
                            <select
                                value={selectedRoomType}
                                onChange={handleFilterChange}
                                className="select select-neutral select-xs md:select-md w-full rounded-md border focus:border-0 focu bg-[var(--card-bg)]"
                            >
                                <option value="Filter by Room Type" disabled>
                                    Filter by Room Type
                                </option>
                                {getRoomTypes().map((roomType, index) => (
                                    <option key={index} value={roomType}>
                                        {roomType}
                                    </option>
                                ))}
                            </select>

                            <select
                                value={sortOrder}
                                onChange={handleSortChange}
                                className="select select-xs md:select-md rounded-md border focus:border-0 bg-[var(--card-bg)]"
                                title="Sort by Rent"
                            >
                                <option value="">Sort by Rent</option>
                                <option value="lowToHigh">Low to High</option>
                                <option value="highToLow">High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Room Count */}
                    <div className="mt-2 md:mt-3 text-xs md:text-sm sec-font">
                        Showing {roomData?.data?.length || 0} rooms
                        {searchTerm && ` matching "${searchTerm}"`}
                        {selectedRoomType !== "Filter by Room Type" && ` (${selectedRoomType})`}
                        {sortOrder && ` | Sorted by Rent: ${sortOrder === "lowToHigh" ? "Low → High" : "High → Low"}`}
                    </div>
                </div>

                {/* Room Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {roomData?.data?.map((post, index) => (
                        <PostCard key={post._id} post={post} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseRoom;
