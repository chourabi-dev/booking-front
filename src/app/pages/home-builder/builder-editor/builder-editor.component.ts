import { Component, OnInit } from '@angular/core';
import grapesjs, { Editor } from 'grapesjs';
@Component({
  selector: 'app-builder-editor',
  templateUrl: './builder-editor.component.html',
  styleUrls: ['./builder-editor.component.scss']
})
export class BuilderEditorComponent implements OnInit {
  editor;

  ngOnInit(): void {
    this.initEditor();
  }



  initEditor(){
    this.editor =  grapesjs.init({
      // Indicate where to init the editor. You can also pass an HTMLElement
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      //height: '300px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: true,
      selectorManager:{
        componentFirst: true,
      },
      canvas: {
        styles: [
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        ],
        scripts: [
          'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        ],
      },
      // Avoid any default panel
      panels: {
        defaults: [{
          id: 'layers',
          el: '.panel__right',
          // Make the panel resizable
          resizable: {
            maxDim: 350,
            minDim: 200,
            tc: false, // Top handler
            cl: true, // Left handler
            cr: false, // Right handler
            bc: true, // Bottom handler
            // Being a flex child we need to change `flex-basis` property
            // instead of the `width` (default)
            keyWidth: 'flex-basis',
          },
        }]
      },
      layerManager: {
        appendTo: '.layers-container'
      },
      blockManager: {
        appendTo: '#blocks',
        blocks: [
   
          {
            id:'layout-1',
            label:'<i class="fas editor-icon-size fa-square"></i><br> <b>Layout 1</b>',
            content: `
            <section>


                <!-- Hero Section -->
                <div class="jumbotron jumbotron-fluid text-center" style="background-image: url('path-to-image'); background-size: cover; height: 400px;">
                    <div class="container">
                        <h1 class="display-4">Welcome to HotelName</h1>
                        <p class="lead">The content goes here</p>
                    </div>
                </div>

                <!-- About Section -->
                <section class="container my-5">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>About Us</h2>
                            <p>The content goes here</p>
                        </div>
                        <div class="col-md-6">
                            <img src="path-to-image" class="img-fluid" alt="Hotel Image">
                        </div>
                    </div>
                </section>

                <!-- Rooms Section -->
                <section class="container my-5">
                    <div class="text-center mb-4">
                        <h2>Our Rooms</h2>
                        <p>The content goes here</p>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <img src="path-to-image" class="card-img-top" alt="Room Image">
                                <div class="card-body">
                                    <h5 class="card-title">Room Type 1</h5>
                                    <p class="card-text">The content goes here</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="path-to-image" class="card-img-top" alt="Room Image">
                                <div class="card-body">
                                    <h5 class="card-title">Room Type 2</h5>
                                    <p class="card-text">The content goes here</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card">
                                <img src="path-to-image" class="card-img-top" alt="Room Image">
                                <div class="card-body">
                                    <h5 class="card-title">Room Type 3</h5>
                                    <p class="card-text">The content goes here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

<!-- Amenities Section -->
<section class="bg-light py-5">
    <div class="container text-center">
        <h2>Amenities</h2>
        <p class="mb-5">The content goes here</p>
        <div class="row">
            <div class="col-md-4">
                <h4>Amenity 1</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <h4>Amenity 2</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <h4>Amenity 3</h4>
                <p>The content goes here</p>
            </div>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="container my-5">
    <div class="text-center mb-4">
        <h2>Gallery</h2>
        <p>The content goes here</p>
    </div>
    <div class="row">
        <div class="col-md-4">
            <img src="path-to-image" class="img-fluid mb-4" alt="Gallery Image">
        </div>
        <div class="col-md-4">
            <img src="path-to-image" class="img-fluid mb-4" alt="Gallery Image">
        </div>
        <div class="col-md-4">
            <img src="path-to-image" class="img-fluid mb-4" alt="Gallery Image">
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="container my-5">
    <div class="text-center mb-4">
        <h2>Contact Us</h2>
        <p>The content goes here</p>
    </div>
</section>

<!-- Footer -->
<footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2024 HotelName. All rights reserved.</p>
</footer>
            </section>
            `
          },
          {
            id:'layout-2',
            label:'<i class="fas editor-icon-size fa-square"></i><br> <b>Layout 2</b>',
            content: `
            <section>

<!-- Hero Section -->
<header class="bg-primary text-white text-center py-5" style="background-image: url('path-to-image'); background-size: cover; height: 400px;">
    <div class="container">
        <h1 class="display-4">Welcome to HotelName</h1>
        <p class="lead">The content goes here</p>
        <a href="#" class="btn btn-secondary btn-lg mt-3">Book Now</a>
    </div>
</header>

<!-- About Section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>About Us</h2>
                <p>The content goes here</p>
            </div>
            <div class="col-md-6">
                <img src="path-to-image" class="img-fluid rounded" alt="Hotel Image">
            </div>
        </div>
    </div>
</section>

<!-- Rooms Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Our Rooms</h2>
            <p>The content goes here</p>
        </div>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="path-to-image" class="card-img-top" alt="Room Image">
                    <div class="card-body">
                        <h5 class="card-title">Room Type 1</h5>
                        <p class="card-text">The content goes here</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="path-to-image" class="card-img-top" alt="Room Image">
                    <div class="card-body">
                        <h5 class="card-title">Room Type 2</h5>
                        <p class="card-text">The content goes here</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="path-to-image" class="card-img-top" alt="Room Image">
                    <div class="card-body">
                        <h5 class="card-title">Room Type 3</h5>
                        <p class="card-text">The content goes here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Amenities Section -->
<section class="py-5">
    <div class="container text-center">
        <h2>Amenities</h2>
        <p class="mb-5">The content goes here</p>
        <div class="row">
            <div class="col-md-4">
                <div class="icon mb-3">
                    <!-- Example icon (e.g., font awesome icon) -->
                    <i class="fas fa-swimming-pool fa-2x"></i>
                </div>
                <h4>Amenity 1</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <div class="icon mb-3">
                    <!-- Example icon (e.g., font awesome icon) -->
                    <i class="fas fa-spa fa-2x"></i>
                </div>
                <h4>Amenity 2</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <div class="icon mb-3">
                    <!-- Example icon (e.g., font awesome icon) -->
                    <i class="fas fa-dumbbell fa-2x"></i>
                </div>
                <h4>Amenity 3</h4>
                <p>The content goes here</p>
            </div>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="py-5 bg-light">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Gallery</h2>
            <p>The content goes here</p>
        </div>
        <div class="row">
            <div class="col-md-4">
                <img src="path-to-image" class="img-fluid mb-4 rounded" alt="Gallery Image">
            </div>
            <div class="col-md-4">
                <img src="path-to-image" class="img-fluid mb-4 rounded" alt="Gallery Image">
            </div>
            <div class="col-md-4">
                <img src="path-to-image" class="img-fluid mb-4 rounded" alt="Gallery Image">
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Contact Us</h2>
            <p>The content goes here</p>
        </div> 
    </div>
</section>

<!-- Footer -->
<footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2024 HotelName. All rights reserved.</p>
</footer>
            </section>
            `
          },
          {
            id:'layout-3',
            label:'<i class="fas editor-icon-size fa-square"></i><br> <b>Layout 3</b>',
            content:`
            
            <section>
            <!-- Hero Section -->
<div class="jumbotron text-center" style="background-image: url('path-to-image'); background-size: cover; color: white;">
    <div class="container">
        <h1 class="display-4">Welcome to HotelName</h1>
        <p class="lead">The content goes here</p>
        <a href="#" class="btn btn-primary btn-lg mt-3">Book Now</a>
    </div>
</div>

<!-- About Section -->
<section class="py-5">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <h2>About Us</h2>
                <p>The content goes here</p>
            </div>
            <div class="col-md-5">
                <img src="path-to-image" class="img-fluid rounded" alt="Hotel Image">
            </div>
        </div>
    </div>
</section>

<!-- Highlights Section -->
<section class="bg-light py-5">
    <div class="container text-center">
        <h2>Why Choose Us</h2>
        <p class="mb-5">The content goes here</p>
        <div class="row">
            <div class="col-md-4">
                <div class="icon mb-3">
                    <i class="fas fa-star fa-2x"></i>
                </div>
                <h4>Highlight 1</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <div class="icon mb-3">
                    <i class="fas fa-map-marker-alt fa-2x"></i>
                </div>
                <h4>Highlight 2</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <div class="icon mb-3">
                    <i class="fas fa-concierge-bell fa-2x"></i>
                </div>
                <h4>Highlight 3</h4>
                <p>The content goes here</p>
            </div>
        </div>
    </div>
</section>

<!-- Rooms Section -->
<section class="py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Our Rooms</h2>
            <p>The content goes here</p>
        </div>
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="path-to-image" class="card-img-top" alt="Room Image">
                    <div class="card-body">
                        <h5 class="card-title">Room Type 1</h5>
                        <p class="card-text">The content goes here</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="path-to-image" class="card-img-top" alt="Room Image">
                    <div class="card-body">
                        <h5 class="card-title">Room Type 2</h5>
                        <p class="card-text">The content goes here</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="path-to-image" class="card-img-top" alt="Room Image">
                    <div class="card-body">
                        <h5 class="card-title">Room Type 3</h5>
                        <p class="card-text">The content goes here</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Amenities Section -->
<section class="bg-light py-5">
    <div class="container text-center">
        <h2>Amenities</h2>
        <p class="mb-5">The content goes here</p>
        <div class="row">
            <div class="col-md-4">
                <h4>Amenity 1</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <h4>Amenity 2</h4>
                <p>The content goes here</p>
            </div>
            <div class="col-md-4">
                <h4>Amenity 3</h4>
                <p>The content goes here</p>
            </div>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Gallery</h2>
            <p>The content goes here</p>
        </div>
        <div class="row">
            <div class="col-md-4 mb-4">
                <img src="path-to-image" class="img-fluid rounded" alt="Gallery Image">
            </div>
            <div class="col-md-4 mb-4">
                <img src="path-to-image" class="img-fluid rounded" alt="Gallery Image">
            </div>
            <div class="col-md-4 mb-4">
                <img src="path-to-image" class="img-fluid rounded" alt="Gallery Image">
            </div>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section class="bg-light py-5">
    <div class="container">
        <div class="text-center mb-4">
            <h2>Contact Us</h2>
            <p>The content goes here</p>
        </div> 
    </div>
</section>

<!-- Footer -->
<footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2024 HotelName. All rights reserved.</p>
</footer>
            </section>
            `
           
          },
          {
            id: 'section', // id is mandatory
            label: '<i class="fas editor-icon-size fa-square"></i><br> <b>Section</b>', // You can use HTML/SVG inside labels
            attributes: { class: 'gjs-block-section' },
            content: `<section>
                        <h1>This is a simple title</h1>
                        <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
                      </section>`,
          },
          {
            id: 'text',
            label: '<i class="fas editor-icon-size fa-font"></i><br> Text',
            content: '<div data-gjs-type="text">Insert your text here</div>',
          },
          {
            id: 'h1',
            label: '<i class="fas editor-icon-size fa-font"></i><br> H1',
            content: '<h1>Insert your text here</h1>',
          },
          {
            id: 'h2',
            label: '<i class="fas editor-icon-size fa-font"></i><br> H2',
            content: '<h2>Insert your text here</h2>',
          },
          {
            id: 'h3',
            label: '<i class="fas editor-icon-size fa-font"></i><br> H3',
            content: '<h3>Insert your text here</h3>',
          },
          
          {
            id: 'image',
            label: '<i class="fas editor-icon-size fa-image"></i><br> Image',
            // Select the component once it's dropped
            select: true,
            content: { type: 'image' },
            // This triggers `active` event on dropped components and the `image` reacts by opening the AssetManager
            activate: true,
          }, 
 
          {
            id: '2 column',
            attributes: { class: 'gjs-block-section' },
            label: '<i class="fas editor-icon-size fa-columns"></i><br> 2 Columns',
            content: '<div class="row" ><div class="col-12 col-sm-6"><p>1</p></div><div class="col-12 col-sm-6"><p>2</p></div></div>',
          },
          {
            id: '3 column',
            attributes: { class: 'gjs-block-section' },
            label: '<i class="fas editor-icon-size fa-columns"></i><br> 3 Columns',
            content: '<div class="row" ><div class="col-12 col-sm-4"><p>1</p></div><div class="col-12 col-sm-4"><p>2</p></div><div class="col-12 col-sm-4"><p>2</p></div></div>',
          },
          {
            id: '4 column',
            attributes: { class: 'gjs-block-section' },
            label: '<i class="fas editor-icon-size fa-columns"></i><br> 4 Columns',
            content: '<div class="row" ><div class="col-12 col-sm-3"><p>1</p></div><div class="col-12 col-sm-3"><p>2</p></div><div class="col-12 col-sm-3"><p>3</p></div><div class="col-12 col-sm-3"><p>4</p></div></div>',
          },
 
          {
            id: 'container',
            attributes: { class: 'gjs-block-section' },
            label: '<i class="fas editor-icon-size fa-columns"></i><br> Container',
            content: '<div class="container" ><p>content goes here</p></div>',
          },

 
          {
            id: 'list',
            label: '<i class="fas editor-icon-size fa-list"></i><br> List',
            content: '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
          },
          {
            id: 'link',
            label: '<i class="fas editor-icon-size fa-link"></i><br> Link',
            content: '<a href="#">Link</a>',
          },
          {
            id: 'quote',
            label: '<i class="fas editor-icon-size fa-quote-right"></i><br> Quote',
            content: '<blockquote>Quote</blockquote>',
          }, 
         
          
        ]
      },
    
    });


  }



  // Listen to the component:update event

 saveChanges() {
  // Get the current HTML and CSS from the editor
  const html = this.editor.getHtml();
  const css = this.editor.getCss();

  // Save the HTML and CSS (e.g., send them to your server or save them locally)
  console.log('Saving changes...');
  console.log('HTML:', html);
  console.log('CSS:', css);

  /**
   * // Example: send the data to your server using fetch
  fetch('/save-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ html, css }),
  })
  .then(response => response.json())
  .then(data => console.log('Save successful:', data))
  .catch(error => console.error('Error saving changes:', error));
   */
}
}
