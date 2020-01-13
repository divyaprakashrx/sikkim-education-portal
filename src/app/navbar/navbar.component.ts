import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../../assets/assets/css/main.css', '../../assets/assets/css/fontawesome-all.min.css', '../../assets/assets/css/noscript.css'
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).on('click', '.navbar-nav > .dropdown', function (e) {
      e.stopPropagation();
    });
    $(".dropdown-submenu").click(function () {
      $(".dropdown-submenu > .dropdown-menu").toggleClass("show");
    });
  }

}
