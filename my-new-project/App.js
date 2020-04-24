import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chart from "./Chart";
import WebView from "react-native-webview";
import HighchartsReactNative from "@highcharts/highcharts-react-native";

export default function App() {
  const chartOptions = {
    series: [
      {
        data: [1, 3, 2],
      },
    ],
  };

  const modules = ["highcharts-more", "solid-gauge"];

  return (
    <HighchartsReactNative
      useCDN={true}
      useSSL={true}
      styles={styles.container}
      options={chartOptions}
      modules={modules}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    // height: 200,
    // width: 200,
    paddingTop: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
