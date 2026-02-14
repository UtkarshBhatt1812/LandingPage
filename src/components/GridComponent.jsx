function GridComponent({ src }) {
  return (
    <div className="flex justify-center items-center bg-white px-1 py-3 opacity-80 hover:opacity-100 group">
      <img
        src={src}
        alt=""
        className="h-18 w-20 invert-50 group-hover:invert-0 transition-all duration-500 ease-in-out"
      />
    </div>
  );
}

export default GridComponent;
