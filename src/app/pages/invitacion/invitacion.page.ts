import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { ACCESSTOKENMAPBOX } from 'src/app/config/env.conf';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as qrious from 'qrious';
import { format, addYears } from 'date-fns';
import { MenuController } from '@ionic/angular';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.page.html',
  styleUrls: ['./invitacion.page.scss'],
})
export class InvitacionPage implements OnInit, AfterViewInit {
  map: mapboxgl.Map;
  marker: mapboxgl.Marker;
  buttonDesactivado = true;
  fecha = '';
  constructor(
    private geolocation: Geolocation,
    private menu: MenuController,
    private datePicker: DatePicker,
    private router: Router
  ) { }

  ngOnInit() {
    this.menu.enable(false);
    const qr = new qrious({
      element: document.getElementById('qr'),
      value: 'https://github.com/neocotic/qrious',
      mime: '/assets/img/1.png',
      size: 250
    });
  }
  obtenerFecha() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      minDate: format(new Date(), 'T'),
      titleText: 'Seleccione su fecha de Expiracion',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT
    }).then(
      date => {
        this.fecha = format(date, 'dd-MM-yyyy');
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }
  ionViewWillEnter() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // console.log(resp.coords.latitude);
      // resp.coords.longitude
      // console.log(resp.coords.longitude);
      this.map = new mapboxgl.Map({
        container: 'mapContainer',
        style: 'mapbox://styles/mapbox/light-v10?optimize=true',
        accessToken: ACCESSTOKENMAPBOX,
        // longitud / latitud
        center: [resp.coords.longitude, resp.coords.latitude], // starting position
        zoom: 18 // starting zoom
      });
      this.map.on('load', () => {
        this.map.resize();
        this.buttonDesactivado = false;
      });
      this.map.on('move', (e) => {
        const {lng, lat} = this.map.getCenter();
        console.log(`lng ${lng}`, `lat ${lat}`);
      });
      this.map.addControl(new mapboxgl.NavigationControl());
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }
  ngAfterViewInit(): void {
  }
  realizarInvitacion() {
    this.router.navigate(['show-message']);
  }

}
