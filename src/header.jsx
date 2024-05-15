
import React from 'react';

const Header = () => {
    return (

        <>
            <div className='container-fluid' style={{ background: "#48afff", maxHeight: "200px", padding: "0 15px" }}>
                <div className="row align-items-center">
                    <div className="col-auto" >
                        <img src="menu.png" alt="Menu" height={60} />


                    </div>
                    <div className="col-auto" >
                        <img src="logo.svg" alt="Logo" height={30} />
                    </div>
                    <div className="col-md col-sm col">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {/* Search input (hidden on small screens) */}
                            <input
                                type="text"
                                placeholder="Search..."
                                style={{ width: 'auto', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }}

                            />
                            {/* Search icon (hidden on large screens) 
                <img src="search-icon.svg" alt="Search" height={30} className="search-icon d-md-none" /> */}
                        </div>
                    </div>
                    <div className="col-auto d-none d-md-block"  >
                        <div style={{ color: '#48afff', background: "white", padding: "10px", borderRadius: "20px", textAlign: "center" }}>Log in</div>
                    </div>
                    <div className="col-auto d-none d-md-block" >
                        <div style={{ color: 'blue', background: "white", padding: "10px", borderRadius: "20px", textAlign: "center" }}>REGISTER</div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    {/* Widget components */}
                </div>
            </div>
        </>

    );
}

export default Header;