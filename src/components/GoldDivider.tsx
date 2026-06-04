const GoldDivider = () => {
  return (
    <div className="flex items-center justify-center gap-3 mx-auto w-fit my-2">
      <span className="block w-10 h-px bg-gradient-to-r from-transparent to-primary/70" />
      <span className="block w-1.5 h-1.5 rotate-45 bg-primary" />
      <span className="block w-10 h-px bg-gradient-to-l from-transparent to-primary/70" />
    </div>
  );
};

export default GoldDivider;
