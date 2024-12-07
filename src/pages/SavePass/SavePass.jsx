import "./SavePass.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { postData, getData, DELETEData } from "../../../serverAPI/serverAPI";
import React, { useState, useEffect } from "react";

function SavePass() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [description, setDescription] = useState("");
    const [savedData, setSavedData] = useState([]);

    // Fetch saved passwords on component mount
    useEffect(() => {
        fetchSavedData();
    }, []);

    // Function to fetch saved passwords
    const fetchSavedData = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const jwt = user?.token;
        if (!jwt) {
            console.error("JWT token is missing.");
            return;
        }
        const url = `/api/passwordsStorage?jwt=${jwt}`;
        try {
            const response = await getData(url);
            console.log("Fetched Data:", response); // Log response to verify structure
            setSavedData(response.data); // Set savedData to the data array
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    let name = email;
    // Function to handle saving new passwords
    const handleSave = async () => {
        const user = JSON.parse(localStorage.getItem('user')); // Retrieve the user object
        const jwt = user?.token;
        try {
            const data = { jwt, name, password, description };
            const response = await postData("/api/passwordsStorage", data);
            console.log("Saved Response:", response);

            // Re-fetch data after saving
            fetchSavedData();
        } catch (error) {
            console.error("Error saving data:", error);
        }
    };
    const handleDelete = async (id) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const jwt = user?.token;
        const data = {id,jwt};
        try {
            const response = await DELETEData("/api/passwordsStorage",data);
            console.log('Deleted Response:', response);

            // Update savedData by filtering out the deleted item
            setSavedData(savedData.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting data:', error);
        }
    };
    return (
        <div style={{ height: "100vh" }}>
            <Header />
            <br />
            <Card className="theHigth">
                <div className="col d-flex flex-column align-items-center">
                    <div className="title-save mt-5">SAVE YOUR PASSWORDS</div>
                    <div className="title-talk mt-4">Enter your Email, Password, & Description</div>


                    <div className="title-cells mt-4">
                        <div className="row  w-100" style={{ paddingLeft: "20px" }}>
                            <div className="col col-cell col-4 cell-header">Email</div>
                            <div className="col col-cell col-3 cell-header">Password</div>
                            <div className="col col-cell col-5 cell-header">Description</div>
                        </div>
                        {savedData.length > 0 ? (
                            savedData.map((data, index) => (
                                <div key={index} className="row w-100" style={{ paddingLeft: "20px" }}>
                                    <div className="col delete-cell px-0 col-1">
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDelete(data.id)} // Pass the ID to delete handler
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div className="col col-cell col-3">
                                        <h6 className="trrr">
                                            {data.name}
                                        </h6></div> {/* Display name */}
                                    <div className="col col-cell col-3">{data.password}</div> {/* Display password */}
                                    <div className="col col-cell t45 col-5">
                                        {data.description}</div> {/* Display description */}

                                </div>
                            ))
                        ) : ""
                        }

                        <div className="row w-100" style={{ paddingLeft: "20px" }}>
                            <div className="col col-cell col-4">
                                <input
                                    type="email"
                                    className="input-cell"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="col col-cell col-3">
                                <input
                                    type="password"
                                    className="input-cell"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col col-cell col-5">
                                <input
                                    type="text"
                                    className="input-cell"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>
                    <button className="save-button mt-3" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </Card >
            <Footer />
        </div >
    );
}

export default SavePass;
