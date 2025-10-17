// Example of a responsive Container component
const Container = ({ children }) => {
  return (
    <div className="container w-full lg:w-[1280px] m-auto px-4 sm:px-6 lg:px-8 ">
      {children}
    </div>
  );
};
export default Container