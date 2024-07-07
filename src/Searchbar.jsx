function SearchBar(){
    return(
        <>
        <div className="ml-14 mb-3">
            <input  type="search"
            placeholder="Search here"
            className="w-full px-3 py-2 bg-transparent border border-black rounded-md" />
        </div>
        <div className=" ml-14 flex justify-between">
        <p>Filter by</p>
        <p>Claer all</p>
        </div>
        <div className="flex items-center text-center justify-around gap-3 ml-14 mb-4 mt-4">
            <p className="px-4 py-4 border border-black w-1/3">Recruiters</p>
            <p className="px-4 py-4 border border-black w-1/3">Talent</p>
            <p className="px-4 py-4 border border-black w-1/3">Tips</p>
        </div>
        <p className="ml-14 mt-9 text-2xl">Showing <b>43</b>resources</p>
        </>
    )
}
export default SearchBar