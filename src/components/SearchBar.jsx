import "../styles/_styles.scss";
function SearchBar() {
  return (
    <div className="search-bar position-relative">
      <span className="position-absolute top-50 start-0 translate-middle-y ms-4 material-symbols-rounded position-absolute text-gray-400">
        search
      </span>
      <input
        className="position-absolute top-0 start-50 translate-middle z-n1 px-13 py-3 border rounded-pill w-100 z-index bg-gray-200"
        type="text"
        placeholder="搜尋產品"
      />
    </div>
  );
}

export default SearchBar;
