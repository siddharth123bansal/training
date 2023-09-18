// const Loading = () => {
//     return (
//         <div className="flex justify-center items-center h-screen">
//         <div className="loading-spinner bg-gray-200 p-4 rounded-lg shadow-lg">
//           <div className="spinner text-black">Loading...</div>
//         </div>
//       </div>
//     );
//   };
//   export default Loading;
const Loading = () => {
  return (
    <>
      <div class="spinner-box flex justify-center items-center h-screen">
        <div class="circle-border">
          <div class="circle-core"></div>
        </div>
      </div>
    </>
  );
};
export default Loading;
