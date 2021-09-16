import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Drawer() {
    return (
        <div>
            <div class="container min-vh-100 py-2">
    <div class="row">
        <div class="col">
           
            <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"> Open Sidebar </button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" data-bs-keyboard="false" data-bs-backdrop="false" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Sidebar</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div id="sidebar" class="border rounded">
                        <div class="nav flex-column py-3">
                          
                            <div class="collapse ps-2" id="menu1" data-bs-parent="#sidebar">
                               
                                <div class="collapse ps-2" id="menu1sub1" data-bs-parent="#menu1">
                                   
                                    
                                    

                                </div>
                            </div>
                           
                            <div class="collapse ps-2" id="menu2" data-bs-parent="#sidebar">
                                
                                
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Drawer
