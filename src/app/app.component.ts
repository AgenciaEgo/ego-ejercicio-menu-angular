import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'egoAgencia';

  readonly menu = [
    {
      "label": "Home",
      "slug": "/"
    },
    {
      "label": "Vehículos",
      "slug": "vehiculos",
      "children": [
        {
          "label": "Autos y Minivans",
          "slug": "autos-y-minivans",
          "children": [
            {
              "label": "Yaris",
              "slug": "yaris"
            },
            {
              "label": "Etios",
              "slug": "etios"
            }
          ]
        },
        {
          "label": "Pickups y Comerciales",
          "slug": "pickups-y-comerciales",
          "children": [
            {
              "label": "Hilux",
              "slug": "hilux"
            },
            {
              "label": "Hiace",
              "slug": "hiace"
            }
          ]
        },
        {
          "label": "SUVs y Crossovers",
          "slug": "suvs-y-crossovers",
          "children": [
            {
              "label": "RAV4",
              "slug": "rav4"
            },
            {
              "label": "Land Cruiser Prado",
              "slug": "land-cruiser-prado"
            }
          ]
        }
      ]
    },
    {
      "label": "Acerca de",
      "slug": "acerca-de",
      "children": [
        {
          "label": "Historia",
          "slug": "historia"
        },
        {
          "label": "Misión",
          "slug": "mision"
        },
        {
          "label": "Visión",
          "slug": "vision"
        }
      ]
    },
    {
      "label": "Contacto",
      "slug": "contacto"
    }
  ];

}
