import { Link } from "react-router-dom";

export default function Footer() {
    return (
    <footer className= "text-light mt-5" style={{backgroundColor: "#3E5A21"}}>
        <div className="container p-4">
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-4">
                <h5 className="mb-3" style={{letterSpacing: "2px"}}>Sustain-ABLE's Mission</h5>
                <p>
                    It's no secret, our world is facing the most rapid period of environmental change in history. Pollution, deforestation, and greenhouse gas emissions are all on the rise due to human activity. We're losing polar icecaps at an alarming rate, oceanic storms are more frequent and stronger than ever before, and global temperature is slowly rising. Humankind's impact on this planet is at the tipping point and if we as a global society don't start making substanial changes towards sustainability, the consequences will be severe for future generations.
                    <br/>
                    <br/>                
                    There is good news though! It's our responsiblity as inhabitants of this beautiful planet to steward its resources and care for the magnificent world we call home. And we are ABLE to change this global warming trajectory. Incorporating even a small daily change toward a more sustainable lifestyle can greatly decrease a person's environmental impact overall.
                </p>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="mb-3" style= {{letterSpacing: "2px"}}>Links</h5>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-1">
                            <Link to="https://www.epa.gov/recycle/reducing-waste-what-you-can-do#Tips%20for%20Home" style={{color: "#98AB83"}}>Reducing Waste: What You Can Do</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="https://pollybarks.com/blog/sustainable-habits" style={{color: "#98AB83"}}>50 Sustainable Habits</Link>
                        </li>
                        <li className="mb-1">
                            <Link to="#!" style={{color: "#98AB83"}}>Pricing</Link>
                        </li>
                        <li>
                            <Link to="#!" style={{color: "#98AB83"}}>Where we deliver?</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <h5 className="mb-1" style= {{letterSpacing: "2px"}}>Team Members</h5>
                    <table className="table" style= {{borderColor: "#666"}}>
                        <tbody style={{color: "#F7F9FB"}}>
                            <tr>
                                <td>Cailin Shaffer</td>
                                <td>
                                    <Link to="https://www.linkedin.com/in/cailin-shaffer/" style={{color: "#98AB83"}}>LinkedIn</Link>
                                </td>
                                <td>
                                    <Link to="https://github.com/cailinshaffer" style={{color: "#98AB83"}}>GitHub</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Emily Ryan</td>
                                <td> 
                                    <Link to="https://www.linkedin.com/in/emilyjudithryan/" style={{color: "#98AB83"}}>LinkedIn</Link>
                                </td>
                                <td> 
                                    <Link to="https://github.com/emilyjryan" style={{color: "#98AB83"}}>GitHub</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>Curtlen Aumiller</td>
                                <td>
                                    <Link to="https://www.linkedin.com/in/curtlenaumillersoftwareengineer/" style={{color: "#98AB83"}}>LinkedIn</Link>
                                </td>
                                <td>
                                    <Link to="https://www.linkedin.com/in/curtlenaumillersoftwareengineer/" style={{color: "#98AB83"}}>GitHub</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className="text-center p-3" style= {{backgroundColor: "#23420E"}}>
            © 2023 Copyright: &nbsp;
            <Link to="/" style={{color: "#98AB83"}}>Sustain-ABLE</Link>
        </div>
    </footer>
    )
}
