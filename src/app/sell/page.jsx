import Footer from "@/componuntes/Fotter";
import Nav from "@/componuntes/Nav";


const Sell = () => {
  return (
    <>
 <Nav />
      <div className="sell-feild  flex justify-around h-[100vh] mt-[60px]">
        <div className="sell-text text-green-600 w-[50%]">
          <div className="main-text-sce text-center">
            <h3 className="uppercase text-xl font-semibold mb-4">Get the best price for your bulk plastic</h3>
            <h1 className="text-4xl font-bold mb-4">Sell Your Plastic Material</h1>
            <p className="text-lg text-justify mb-4">
              WasteTrade makes it easier than ever to sell waste commodities for the best prices to the most sustainable reprocessors.
            </p>
            <img src="/pixelcut-export.jpeg" alt="logo" className="mx-auto mb-4 w-[300px] h-[200px]" />
          </div>
        </div>
<div>


        <form  className="w-96 bg-green-600 text-white p-6 rounded-xl">
          <p className="text-center text-xl mb-4">Fill the details</p>
          <input
            type="text"
            name="type"
            placeholder="Material Type"
            className="w-4/5 mx-auto block p-2 mb-4 text-lg rounded-md"
          />
          <input
            type="text"
            name="quantity"
            placeholder="Quantity (kg)"
            className="w-4/5 mx-auto p-2 block mb-4 text-lg rounded-md"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="w-4/5 mx-auto block p-2 mb-4 text-lg rounded-md"
          />
          <input
            type="file"
            accept="image/*"
            name="file"
            className="w-4/5 mx-auto block p-2 mb-4 bg-white text-lg rounded-md"
          />
          <textarea
            name="description"
            placeholder="Description"
            className="w-4/5 mx-auto block p-2 mb-4 text-lg rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-1/2 mx-auto bg-white block text-green-600 py-2 rounded-full font-semibold text-lg"
          >
            Submit
          </button>
        </form>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Sell;
