import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Ocr, TextDetections } from '@capacitor-community/image-to-text';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private actionSheetController: ActionSheetController) {}

  textDetections: any[] = [];

  // Function to choose whether to take a photo or pick from the gallery
  async captureAndExtractText() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose an option',
      buttons: [
        {
          text: 'Take Photo',
          handler: () => {
            this.captureImage(CameraSource.Camera); // Use camera to capture image
          },
        },
        {
          text: 'Pick from Gallery',
          handler: () => {
            this.captureImage(CameraSource.Photos); // Use gallery to select image
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  // Function to capture image from camera or gallery
  async captureImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        source: source,
        resultType: CameraResultType.Base64, // You can choose other types like URI if needed
        quality: 100, // Adjust quality if necessary
      });

      // Ensure base64Image is a valid string before passing to OCR
      const base64Image = image.base64String;
      if (base64Image) {
        this.extractTextFromImage(base64Image); // Call OCR function if base64Image is valid
      } else {
        console.error('No image data available');
      }
    } catch (error) {
      console.error('Error capturing image', error);
    }
  }

  // Function to extract text from the image using OCR
  async extractTextFromImage(base64Image: string) {
    try {
      const result = await Ocr.detectText({
        base64: base64Image, // Pass the base64 image to OCR
      });

      console.log('Detected Text:', result);

      this.textDetections = result.textDetections;
      console.log(this.textDetections);

    } catch (error) {
      console.error('Error during OCR', error);
    }
  }







  // async captureAndExtractText() {
  //   try {
  //     // Capture the image from the camera
  //     const photo = await Camera.getPhoto({
  //       resultType: CameraResultType.Base64, // Get the photo as a base64 string
  //       source: CameraSource.Camera,         // Use the camera as the source
  //       quality: 90                          // Set image quality (0-100)
  //     });

  //     // Check if the photo was successfully captured
  //     if (photo && photo.base64String) {
  //       // Perform OCR on the captured image
  //       const result: TextDetections = await Ocr.detectText({
  //         base64: photo.base64String
  //       });

  //       // Log the entire result object to inspect its structure
  //       console.log('OCR Result:', result);

  //       this.textDetections = result.textDetections;
  //       console.log(this.textDetections);
  //     }
  //   } catch (error) {
  //     // Handle any errors during capture or OCR
  //     console.error('Error capturing or extracting text:', error);
  //   }
  // }

}

