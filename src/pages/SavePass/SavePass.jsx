import "./SavePass.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";

function SavePass() {
    return (
        <div style={{ height: "100vh" }}>
            <Header />
            <br />

            <Card className="theHigth">
                <div className="col d-flex flex-column align-items-center">
                    <div className="title-save mt-5">SAVE YOUR PASSWORDS</div>
                    <div className="title-talk mt-4">Enter your Email & password & Description</div>
                    <div className="title-cells mt-4">
                        <div className="row h-100 w-100" style={{ paddingLeft: "20px" }}>
                            <div className="col col-cell col-3 cell-corner-1 cell-header">Email</div>
                            <div className="col col-cell col-3 cell-header">Password</div>
                            <div className="col col-cell col-6 cell-corner-2 cell-header">Description</div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="email" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="password" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3 cell-corner-3">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-3">
                                <input type="text" className="input-cell" />
                            </div>
                            <div className="col col-cell col-6 cell-corner-4">
                                <input type="text" className="input-cell" />
                            </div>
                        </div>
                    </div>
                    <button className="save-button mt-3">Save</button>
                </div>
            </Card>
            <Footer />
        </div>
    );
}

export default SavePass;
