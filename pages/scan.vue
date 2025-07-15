<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8" class="text-center">
        <h1>QR Code Scanner</h1>
        <div id="reader" style="width: 300px; margin: auto;"></div>
        <v-alert
          v-if="scannedText"
          type="success"
          class="mt-5"
          dense
          border="left"
          colored-border
        >
          Scanned Result: {{ scannedText }}
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      scannedText: '',
      html5QrcodeScanner: null
    };
  },
  mounted() {
    const config = {
      fps: 10,
      qrbox: 250
    };

    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      this.scannedText = decodedText;
      console.log(`Code scanned = ${decodedText}`, decodedResult);
      this.html5QrcodeScanner.clear(); // Stop scanning
    };

    this.html5QrcodeScanner = new this.$Html5QrcodeScanner("reader", config, false);
    this.html5QrcodeScanner.render(qrCodeSuccessCallback);
  },
  beforeDestroy() {
    if (this.html5QrcodeScanner) {
      this.html5QrcodeScanner.clear().catch(err => {
        console.error("Error clearing scanner: ", err);
      });
    }
  }
};
</script>
