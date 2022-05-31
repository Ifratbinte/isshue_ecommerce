import React from 'react'

function Compare() {
  return (
    <>
    <div class="page-breadcrumbs">
        <div class="container">
            <ol class="breadcrumb">
                <li><a href="">Home</a></li>
                <li class="active">Compare Product</li>
            </ol>
        </div>
    </div>
    <div className="container">
        <div class="container pb-5 mb-2">
            <div class="table-responsive">
                <table class="table table-bordered table-fixed table-compare">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">Product</th>
                            <td class="text-center px-4 pb-4">
                                <a class="d-inline-block mb-3"href="/product-details">
                                    <img src="assets/img/isshue/product/category_1/product_1.jpg" alt="product"/>
                                </a>
                                <h3 class="product-title">
                                    <a href="/product-details">Woman bag -Apple iMac (27-inch Retina 5K</a>
                                </h3>
                            </td>
                            <td class="text-center px-4 pb-4">
                                <a class="d-inline-block mb-3" href="/product-details">
                                    <img src="assets/img/isshue/product/category_1/product_2.jpg" alt="product"/>
                                </a>
                                <h3 class="product-title">
                                    <a href="/product-details">Home Garden Hot Selling European Elegant Gold Metal Pots Flower Planter</a>
                                </h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody id="compare">
                        <tr class="bg-gray">
                            <th class="text-uppercase align-middle">Name</th>
                            <td>Woman bag -Apple iMac (27-inch Retina 5K</td>
                            <td>Winter Jaket 7 - AORIWEI Hot Sale Long Sleeve Winter jacket Thermal Parka Men Winter Coats</td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Item Code</th>
                            <td>WB</td>
                            <td>WJ 7</td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Category</th>
                            <td>Women&#039;s Fashion</td>
                            <td>Winter Collection</td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Price</th>
                            <td>$ 200.00</td>
                            <td>$ 780.00</td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Brand</th>
                            <td>bdtask</td>
                            <td>bdtask</td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Unit</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Variant</th>
                            <td><p className='m-0'>Large, Medium, Small, Blue, Green</p></td>
                            <td><p></p></td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Description</th>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet magna erat. Nullam at ex ex. Donec convallis pulvinar lorem, finibus rutrum ante tincidunt nec. Phasellus quam ex, venenatis nec&#8230;</td>
                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and&#8230;</td>
                        </tr>
                        <tr>
                            <th class="text-uppercase align-middle">Action</th>
                            <td class="align-center">
                                <a href="/cart" class="btn btn-info btn-sm mr-2"><i class="fa fa-shopping-cart"></i></a>
                                <a href="" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></a>
                            </td>
                            <td class="align-center">
                                <a href="/cart" class="btn btn-info btn-sm mr-2"><i class="fa fa-shopping-cart"></i></a>
                                <a href="" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}

export default Compare;