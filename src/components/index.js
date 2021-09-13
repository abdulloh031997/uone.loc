import bannerimage from "../assets/images/gfx-e.png";
import Typical from "react-typical";
function Index() {
    return (
        <>
            <div className="banner_seaction">
                <div className="container px-0">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h1 className="text-uppercase">UONE IT company reflect spheres</h1>
                                <br />
                                <br />
                                <br />
                                <h3>
                                <Typical
                                    loop={Infinity}
                                    wrapper="p"
                                    steps={[
                                    "Web Developer",
                                    5000,
                                    "Graphic Designer",
                                    5000,
                                    "Freelancer",
                                    5000,
                                    "Founder at NH Creations",
                                    5000
                                    ]}
                                />
                                </h3>
                            </div>
                        </div>          
                        <div className="col-md-6">
                            <div className="text-right float-end">
                                <img src={bannerimage} />
                            </div>
                        </div>          
                    </div>
                </div>
            </div>
        </>
    )
}
export default Index;