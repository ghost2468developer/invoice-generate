import { useRef, useState } from "react"
import ReactToPrint from "react-to-print"
import TableForm from "./components/TableForm"
import Clientdetail from "./components/clientdetail"
import Dates from "./components/dates"
import Footer from "./components/footer"
import Header from "./components/header"
import Items from "./components/items"
import Notes from "./components/notes"
import Shopdetails from "./components/shopdetails"

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, SetMobile] = useState("");

  const [shopName, setshopName] = useState("");
  const [shopDes, setshopDes] = useState("");
  const [shopAdd, SetshopAdd] = useState("");
  const [notes, setNotes] = useState("");

  const [services, setServices] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState("");
  const [list, setList] = useState([]);

  const [sum, setSum] = useState(0);

  const componentsRef = useRef();

  


  return (
    <>
      <main className="m-5 p-5 md: max-w-xl md:mx-auto xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div ref={componentsRef}>
            <ReactToPrint
              trigger={() => <button className="btn not-Print">Print</button>}
              content={() => componentsRef.current}
              pageStyle="@page { size: auto;  margin: 10mm; }"
            />
            <Header />

            <Shopdetails
              shopName={shopName}
              shopDes={shopDes}
              shopAdd={shopAdd}
            />

            <Dates />

            <Clientdetail name={name} address={address} mobile={mobile} />

            <Items
              services={services}
              quantity={quantity}
              rate={rate}
              total={total}
              list={list}
              setList={setList}
              sum={sum}
            />

            <Notes notes={notes} />

            <Footer />
            <button
              onClick={() => setShowInvoice(false)}
              className="btn not-Print"
            >
              Edit Bill
            </button>
            <ReactToPrint
              trigger={() => (
                <button className="btn not-Print">Download</button>
              )}
              content={() => componentsRef.current}
              pageStyle="@page { size: auto;  margin: 10mm; }"
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="shopName" class="my-3">
                Shop Name
              </label>
              <input
                type="text"
                name="text"
                id="shopName"
                placeholder="Enter Shop Name"
                defaultValue="Default Value"
                value={shopName}
                onChange={(e) => setshopName(e.target.value)}
              />

              <label htmlFor="shopDes" class="my-3">
                Shop Description
              </label>
              <input
                type="text"
                name="text"
                id="shopDes"
                placeholder="Enter Shop Description"
                value={shopDes}
                onChange={(e) => setshopDes(e.target.value)}
              />

              <label htmlFor="shopAdd" class="my-3">
                Shop Address
              </label>
              <input
                type="text"
                name="text"
                id="shopAdd"
                placeholder="Enter Shop Address"
                value={shopAdd}
                onChange={(e) => SetshopAdd(e.target.value)}
              />

              <label htmlFor="notes" class="my-3">
                Notes to Customer
              </label>
              <input
                type="text"
                name="text"
                id="notes"
                placeholder="Enter Notes for Customer"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              {/* <label htmlFor="name" className="my-3">
                Name
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter Customer's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="mobile" className="my-3">
                Mobile Number
              </label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                placeholder="Enter 10-digit Customer Mobile Number"
                value={mobile}
                onChange={(e) => SetMobile(e.target.value)}
                pattern="^\d{10}$" // Use a regular expression to enforce 10 digits
                title="Please enter a 10-digit mobile number" // Optional: Provide a custom error message
              />

              <label htmlFor="address" className="my-3">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Customer's Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              /> */}

              <div class="form-container">
                <div class="form-row-left">
                  <label htmlFor="name" className="my-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter Customer's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div class="form-row-right">
                  <label htmlFor="mobile" className="my-3">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter 10-digit Customer Mobile Number"
                    value={mobile}
                    onChange={(e) => SetMobile(e.target.value)}
                    pattern="^\d{10}$" // Use a regular expression to enforce 10 digits
                    title="Please enter a 10-digit mobile number" // Optional: Provide a custom error message
                  />
                </div>
              </div>

              <label htmlFor="address" className="my-3">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Customer's Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <article>
                <TableForm
                  services={services}
                  setServices={setServices}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  rate={rate}
                  setRate={setRate}
                  total={total}
                  setTotal={setTotal}
                  list={list}
                  setList={setList}
                  sum={sum}
                  setSum={setSum}
                />
              </article>

              <button onClick={() => setShowInvoice(true)} className="btn">
                Preview Bill
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
