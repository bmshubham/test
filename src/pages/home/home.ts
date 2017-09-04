import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  time: any;

  constructor(private navCtrl: NavController, private datePicker: DatePicker, private localNotifications: LocalNotifications) {
    this.time = new Date(new Date().getTime() + 5 * 3600);
    console.log(this.time);
  }

  setReminder() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Single ILocalNotification',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    });
  }

  setSchedule() {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      at: this.time,
      led: 'FF0000',
      sound: null
   });
  }

  getDate() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      allowOldDates: false,
      allowFutureDates: true,
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }

}
