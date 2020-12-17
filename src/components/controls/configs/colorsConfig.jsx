const colors = [
  {
    label: "Coconut",
    value: "6CD5FFAEE0FFE9FCFFD65F95B24672FFD5ABF794BD5AF9C42AB7B7"
  },
  {
    label: "DrivingAtNight",
    value: "271F6A7E22B75F1DCE5F7BFC37A9DD30F6FD7AFCEE95F7FF"
  },
  {
    label: "Heatwave",
    value: "FFF080FFD97DF794BDFCA1FFFF73E1F23089"
  },
  {
    label: "Hot",
    value: "531a739a2080e3217be02e5be03a2bec7d2f"
  },
  {
    label: "HotSauce",
    value: "FFF0805AF9C42AB7B7FCA1FFFF73E1F23089"
  },
  {
    label: "Karma",
    value: "8cc45f8b7db21ca5dcef1e35fed157f98b46f37398"
  },
  {
    label: "LemonJelly",
    value: "92FFD82AB7B7FFF080FFD5ABE9FCFFAEE0FF3FA9F5"
  },
  {
    label: "Lolly",
    value: "ED73A3F794BDFCE4BEFFF0805AF9C46CD5FFE9FCFF"
  },
  {
    label: "Milkshake",
    value: "FF73E1F794BD8AA2F092DCFFAEE0FFE9FCFF"
  },
  {
    label: "Nivo",
    value: "e7c0a2f27664f0df66e6a74466ccbb9ae2d5"
  },
  {
    label: "Popsicle",
    value:
      "FCA1FFFFF080F794BDFFC1AEFF73E1FCA1FF6CD5FF5AF9C46950DD6CD5FFF794BDFCE4BE"
  },
  {
    label: "Summer",
    value: "fce4befff080ffc1aef794bdfca1ffff73e16950dd"
  },
  {
    label: "Sundae",
    value: "d4145aff73e1fca1ffaee0ffe9fcff"
  },
  {
    label: "Tacos",
    value: "FFD5ABEA59CEFF73E198F6AA5AF9C4F794BD"
  },
  {
    label: "Watermelon",
    value: "4BC1C9AEE0FF6950DDFF73E1FCA1FF2AB7B75AF9C4"
  },
  {
    label: "accent",
    value: "7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"
  },
  {
    label: "category10",
    value: "1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"
  },
  {
    label: "dark2",
    value: "1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"
  },
  {
    label: "paired",
    value:
      "a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"
  },
  {
    label: "pastel1",
    value: "fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"
  },
  {
    label: "pastel2",
    value: "b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"
  },
  {
    label: "set1",
    value: "e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"
  },
  {
    label: "set2",
    value: "66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"
  },
  {
    label: "set3",
    value:
      "8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"
  },
  {
    label: "brown_blueGreen",
    value:
      "d8b365f5f5f55ab4aca6611adfc27d80cdc1018571a6611adfc27df5f5f580cdc10185718c510ad8b365f6e8c3c7eae55ab4ac01665e8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c305430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
  },
  {
    label: "purpleRed_green",
    value:
      "af8dc3f7f7f77fbf7b7b3294c2a5cfa6dba00088377b3294c2a5cff7f7f7a6dba0008837762a83af8dc3e7d4e8d9f0d37fbf7b1b7837762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783740004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
  },
  {
    label: "pink_yellowGreen",
    value:
      "e9a3c9f7f7f7a1d76ad01c8bf1b6dab8e1864dac26d01c8bf1b6daf7f7f7b8e1864dac26c51b7de9a3c9fde0efe6f5d0a1d76a4d9221c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d92218e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d92212764198e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
  },
  {
    label: "purple_orange",
    value:
      "998ec3f7f7f7f1a3405e3c99b2abd2fdb863e661015e3c99b2abd2f7f7f7fdb863e66101542788998ec3d8daebfee0b6f1a340b35806542788998ec3d8daebf7f7f7fee0b6f1a340b358065427888073acb2abd2d8daebfee0b6fdb863e08214b358065427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358062d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b082d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
  },
  {
    label: "red_blue",
    value:
      "ef8a62f7f7f767a9cfca0020f4a58292c5de0571b0ca0020f4a582f7f7f792c5de0571b0b2182bef8a62fddbc7d1e5f067a9cf2166acb2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166acb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166acb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac05306167001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
  },
  {
    label: "red_grey",
    value:
      "ef8a62ffffff999999ca0020f4a582bababa404040ca0020f4a582ffffffbababa404040b2182bef8a62fddbc7e0e0e09999994d4d4db2182bef8a62fddbc7ffffffe0e0e09999994d4d4db2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4db2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
  },
  {
    label: "red_yellow_blue",
    value:
      "fc8d59ffffbf91bfdbd7191cfdae61abd9e92c7bb6d7191cfdae61ffffbfabd9e92c7bb6d73027fc8d59fee090e0f3f891bfdb4575b4d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
  },

  {
    label: "red_yellow_green",
    value:
      "fc8d59ffffbf91cffc8d59ffffbf91cf60d7191cfdae61a6d96a1a9641d7191cfdae61ffffbfa6d96a1a9641d73027fc8d59fee08bd9ef8b91cf601a9850d73027fc8d59fee08bffffbfd9ef8b91cf601a9850d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a98500068376d7191cfdae61a6d96a1a9641d7191cfdae61ffffbfa6d96a1a9641d73027fc8d59fee08bd9ef8b91cf601a9850d73027fc8d59fee08bffffbfd9ef8b91cf601a9850d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
  },
  {
    label: "spectral",
    value:
      "fc8d59ffffbf99d594d7191cfdae61abdda42b83bad7191cfdae61ffffbfabdda42b83bad53e4ffc8d59fee08be6f59899d5943288bdd53e4ffc8d59fee08bffffbfe6f59899d5943288bdd53e4ff46d43fdae61fee08be6f598abdda466c2a53288bdd53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa29e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
  },
  {
    label: "blues",
    value:
      "deebf79ecae13182bdeff3ffbdd7e76baed62171b5eff3ffbdd7e76baed63182bd08519ceff3ffc6dbef9ecae16baed63182bd08519ceff3ffc6dbef9ecae16baed64292c62171b5084594f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
  },
  {
    label: "greens",
    value:
      "e5f5e0a1d99b31a354edf8e9bae4b374c476238b45edf8e9bae4b374c47631a354006d2cedf8e9c7e9c0a1d99b74c47631a354006d2cedf8e9c7e9c0a1d99b74c47641ab5d238b45005a32f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
  },
  {
    label: "greys",
    value:
      "0xf0f0f0bdbdbd636363f7f7f7cccccc969696525252f7f7f7cccccc969696636363252525f7f7f7d9d9d9bdbdbd969696636363252525f7f7f7d9d9d9bdbdbd969696737373525252252525fffffff0f0f0d9d9d9bdbdbd969696737373525252252525fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000808080"
  },
  {
    label: "oranges",
    value:
      "0xffee6cefdae6be6550dfeeddefdbe85fd8d3cd94701feeddefdbe85fd8d3ce6550da63603feeddefdd0a2fdae6bfd8d3ce6550da63603feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704fa500"
  },
  {
    label: "purples",
    value:
      "efedf5bcbddc756bb1f2f0f7cbc9e29e9ac86a51a3f2f0f7cbc9e29e9ac8756bb154278ff2f0f7dadaebbcbddc9e9ac8756bb154278ff2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
  },
  {
    label: "reds",
    value:
      "fee0d2fc9272de2d26fee5d9fcae91fb6a4acb181dfee5d9fcae91fb6a4ade2d26a50f15fee5d9fcbba1fc9272fb6a4ade2d26a50f15fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000dfff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000dfff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
  },
  {
    label: "blue_green",
    value:
      "e5f5f999d8c92ca25fedf8fbb2e2e266c2a4238b45edf8fbb2e2e266c2a42ca25f006d2cedf8fbccece699d8c966c2a42ca25f006d2cedf8fbccece699d8c966c2a441ae76238b45005824f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
  },
  {
    label: "blue_purple",
    value:
      "e0ecf49ebcda8856a7edf8fbb3cde38c96c688419dedf8fbb3cde38c96c68856a7810f7cedf8fbbfd3e69ebcda8c96c68856a7810f7cedf8fbbfd3e69ebcda8c96c68c6bb188419d6e016bf7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016bf7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
  },

  {
    label: "green_blue",
    value:
      "e0f3dba8ddb543a2caf0f9e8bae4bc7bccc42b8cbef0f9e8bae4bc7bccc443a2ca0868acf0f9e8ccebc5a8ddb57bccc443a2ca0868acf0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589ef7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589ef7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
  },
  {
    label: "orange_red",
    value:
      "fee8c8fdbb84e34a33fef0d9fdcc8afc8d59d7301ffef0d9fdcc8afc8d59e34a33b30000fef0d9fdd49efdbb84fc8d59e34a33b30000fef0d9fdd49efdbb84fc8d59ef6548d7301f990000fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
  },
  {
    label: "purple_blue_green",
    value:
      "ece2f0a6bddb1c9099f6eff7bdc9e167a9cf02818af6eff7bdc9e167a9cf1c9099016c59f6eff7d0d1e6a6bddb67a9cf1c9099016c59f6eff7d0d1e6a6bddb67a9cf3690c002818a016450fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
  },
  {
    label: "purple_blue",
    value:
      "ece7f2a6bddb2b8cbef1eef6bdc9e174a9cf0570b0f1eef6bdc9e174a9cf2b8cbe045a8df1eef6d0d1e6a6bddb74a9cf2b8cbe045a8df1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7bfff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7bfff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
  },
  {
    label: "purple_red",
    value:
      "e7e1efc994c7dd1c77f1eef6d7b5d8df65b0ce1256f1eef6d7b5d8df65b0dd1c77980043f1eef6d4b9dac994c7df65b0dd1c77980043f1eef6d4b9dac994c7df65b0e7298ace125691003ff7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003ff7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
  },
  {
    label: "red_purple",
    value:
      "fde0ddfa9fb5c51b8afeebe2fbb4b9f768a1ae017efeebe2fbb4b9f768a1c51b8a7a017feebe2fcc5c0fa9fb5f768a1c51b8a7a0177feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
  },
  {
    label: "yellow_green_blue",
    value:
      "edf8b17fcdbb2c7fb8ffffcca1dab441b6c4225ea8ffffcca1dab441b6c42c7fb8253494ffffccc7e9b47fcdbb41b6c42c7fb8253494ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
  },
  {
    label: "yellow_green",
    value:
      "f7fcb9addd8e31a354ffffccc2e69978c679238443ffffccc2e69978c67931a354006837ffffccd9f0a3addd8e78c67931a354006837ffffccd9f0a3addd8e78c67941ab5d238443005a32ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
  },
  {
    label: "yellow_orange_brown",
    value:
      "fff7bcfec44fd95f0effffd4fed98efe9929cc4c02ffffd4fed98efe9929d95f0e993404ffffd4fee391fec44ffe9929d95f0e993404ffffd4fee391fec44ffe9929ec7014cc4c028c2d04ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
  },
  {
    label: "yellow_orange_red",
    value:
      "ffeda0feb24cf03b20ffffb2fecc5cfd8d3ce31a1cffffb2fecc5cfd8d3cf03b20bd0026ffffb2fed976feb24cfd8d3cf03b20bd0026ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
  }
];

export const colorsConfig = {
  colors
};
