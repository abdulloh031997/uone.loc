import bannerimage from "../assets/images/gfx-e.png";
function Index() {
    return (
        <>
            <div className="banner_seaction">
                <div className="container-fluid px-0">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <div>
                                <h1>WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE</h1>
                                <p>
                                The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology. We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology.
                                </p>
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