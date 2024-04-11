const products = [
    {
      id: 1,
      name: "HYTE Y60",
      description: "Gabinete PC Gaming Y60 Red, ATX, Cristal Panorámico 3 Piezas, 3 Ventiladores Incluidos, Color Rojo",
      stock: 2,
      category: "case",
      image: "/img/items/hyte_y60.png",
      price: 249000
    },
    {
      id: 2,
      name: "KOLINK OBSERVATORY HF MESH",
      description: "Gabinete Gamer Kolink Observatory HF Mesh ARGB, MIDI TOWER, Color Negro, Incluye 6 Ventiladores",
      stock: 10,
      category: "case",
      image: "/img/items/kolink_observatory_hf.png",
      price: 66990
    },
    {
      id: 3,
      name: "KOLINK VOID RGB",
      description: "Gabinete Gamer Kolink Void RGB, Vidrio Templado, Mid Tower, ATX, Mini-ATX, Mini-ITX, Color blanco",
      stock: 6,
      category: "case",
      image: "/img/items/kolink_void_rgb.png",
      price: 49990
    },
    {
      id: 4,
      name: "KOLINK CITADEL MESH BLACK",
      description: "Gabinete Gamer KOLINK Citadel Mesh A-RGB Black, Vidrio Templado, Mini-ITX, Micro-ATX",
      stock: 14,
      category: "case",
      image: "/img/items/kolink_citadel_mesh_rgb.png",
      price: 82990
    },
    {
      id: 5,
      name: "MSI MPG GUNGNIR 111",
      description: "Gabinente Gamer MSI MPG GUNGNIR 111R, ATX, Micro-ATX, Mini-ITX",
      stock: 10,
      category: "case",
      image: "/img/items/msi_gungnir_111r.png",
      price: 264318
    },
    {
      id: 6,
      name: "ZOTAC RTX 4060",
      description: "Tarjeta De Video Zotac NVIDIA GeForce RTX 4060 Twin Edge OC, 8GB, 128-Bits, GDDR6, PCI-e 4.0",
      stock: 4,
      category: "video",
      image: "/img/items/zotac_4060_twin.png",
      price: 389990
    },
    {
      id: 7,
      name: "ASUS ROG STRIX RTX 4070",
      description: "Tarjeta de Video ASUS ROG Strix Nvidia GeForce RTX 4070 SUPER OC Edition, 12GB GDDR6X, DLSS 3",
      stock: 1,
      category: "video",
      image: "/img/items/rog_strix_4070.png",
      price: 829990
    },
    {
      id: 8,
      name: "GIGABYTE RX 7700 XT GAMING OC",
      description: "Tarjeta de Video GIGABYTE Radeon RX 7700 XT GAMING OC, 12GB GDDR6, 192-bit, PCI-e 4.0",
      stock: 1,
      category: "video",
      image: "/img/items/gigabyte_7700.png",
      price: 556190
    },
    {
        id: 9,
        name: "GIGABYTE RX 7600 XT GAMING OC",
        description: "Tarjeta de Video GIGABYTE Radeon RX 7600 XT GAMING OC, 16GB GDDR6, 128-bit, PCI-e 4.0",
        stock: 4,
        category: "video",
        image: "/img/items/gigabyte_7600.png",
        price: 446990
      },
      {
        id: 10,
        name: "ASUS ROG HERCULX EVA-02 EDITION",
        description: "Soporte para Tarjetas de Video Asus ROG Herculx EVA-02 Edition, EVANGELION, Comp. RTX 4000",
        stock: 1,
        category: "video",
        image: "/img/items/asus_rog_herculx_eva_02.png",
        price: 69990
      },
      {
        id: 11,
        name: "MSI MAG Z790 TOMAHAWK MAX WIFI",
        description: "Placa Madre MSI MAG Z790 Tomahawk Max Wifi, Intel® Z790, 4xDDR5, 1xHDMI, 4xM.2, Wi-Fi 7, ATX",
        stock: 15,
        category: "mobo",
        image: "/img/items/nag_z790_tomahawk_max.png",
        price: 374570
      },
      {
        id: 12,
        name: "GIGABYTE Z790 AORUS ELITE X",
        description: "Placa Madre Gigabyte Z790 Aorus Elite X WIFI7, Intel LGA1700, 4xDDR5, HDMI, DP, 4x M.2, ATX",
        stock: 4,
        category: "mobo",
        image: "/img/items/z790_aorus_elite_ax.png",
        price: 354090
      },
      {
        id: 13,
        name: "GIGABYTE B550 GAMING X V2",
        description: "Placa Madre GIGABYTE B550 Gaming X V2, Socket AM4, ATX, USB 3.1 Gen 1, PCIe 4.0",
        stock: 1,
        category: "mobo",
        image: "/img/items/gigabyte_b550_gaming_x_v2.png",
        price: 152990
      },
      {
        id: 14,
        name: "ASUS PRIME B650M-A II",
        description: "Placa Madre ASUS PRIME B650M-A II, Socket AM5, DDR5, 2.5GbE, Wi-Fi 6, M.2 PCI-e 5.0, m-ATX",
        stock: 3,
        category: "mobo",
        image: "/img/items/asus_prime_b650m_a_ii.png",
        price: 299990
      },
      {
        id: 15,
        name: "MSI PRO X670-P WiFi",
        description: "Placa Madre MSI Pro X670-P WiFi, DDR5, Socket AM5, SATA 6Gb/s, ATX, Enfriamiento Frozr AI",
        stock: 2,
        category: "mobo",
        image: "/img/items/msi_pro_x670p_wifi.png",
        price: 417650
      },
      {
        id: 16,
        name: "G.SKILL TRIDENT Z RGB 16GB DDR4",
        description: "Memoria Ram DDR4 16GB (2x8) 3600MHz G.Skill Trident Z RGB DIMM, PC4-28800, CL19, 1.35V",
        stock: 20,
        category: "memos",
        image: "/img/items/gskill_trident_z_rgb.png",
        price: 53077
      },
      {
        id: 17,
        name: "CORSAIR DOMINATOR PLATINUM 16GB DDR4",
        description: "Memoria Ram DDR4 16GB (2x8GB), 3200MHZ, Corsair Dominator Platinum, RGB, DIMM",
        stock: 2,
        category: "memos",
        image: "/img/items/corsair_dominator_platinum.png",
        price: 64990
      },
      {
        id: 18,
        name: "G.SKILL TRIDENT Z RGB 32GB DDR4",
        description: "Memoria Ram DDR4 32GB (2x16) 3600MHz G.Skill Trident Z RGB DIMM, CL18-22-22-42, 1.35V, Black",
        stock: 5,
        category: "memos",
        image: "/img/items/gsikill_trident_z_rgb_32.png",
        price: 209990
      },
      {
        id: 19,
        name: "G.SKILL TRIDENT Z ROYAL ELITE 16GB DDR4",
        description: "Memoria Ram DDR4 16GB(2x8GB) 3600MHz G.Skill Trident Z Royal Elite, CL16, 1.2V",
        stock: 1,
        category: "memos",
        image: "/img/items/gskill_trident_z_royal_elite.png",
        price: 224990
      },
      {
        id: 20,
        name: "KINGSTON FURY RENEGADE RGB 32GB DDR5",
        description: "Kit de Memoria RAM Kingston FURY Renegade RGB Black DDR5, 32GB (2X 16GB) 6000MT/s, CL32, DIMM",
        stock: 1,
        category: "memos",
        image: "/img/items/kingston_fury_renegade_rgb.png",
        price: 188810
      },
      {
        id: 21,
        name: "MONITOR PORTATIL HELLOPRO M1",
        description: "Monitor Portatil HelloPro Hello M1, 15.6'', IPS, HDR, 60Hz, Incluye Funda",
        stock: 7,
        category: "monitor",
        image: "/img/items/hellopro_m1.png",
        price: 146990
      },
      {
        id: 22,
        name: "MONITOR CURVO SAMSUNG FHD 27 PULG.",
        description: "Monitor Curvo Samsung de 27”, FullHD, 75HZ, Panel VA, VGA, HDMI, FreeSync, Certificado TUV",
        stock: 20,
        category: "monitor",
        image: "/img/items/samsung_curvo_c27f390f.png",
        price: 122900
      },
      {
        id: 23,
        name: "MONITOR SAMSUNG LED 21.5 PULGADAS",
        description: "Monitor Samsung Led 21.5”, Diseño Súper Delgado, 60Hz, 1 x VGA 1 x HDMI",
        stock: 1,
        category: "monitor",
        image: "/img/items/samsung_led_215.png",
        price: 110990
      },
      {
        id: 24,
        name: "MONITOR PROFESIONAL HIKVISION 4K",
        description: "Monitor Profesional Hikvision DS-D5B86RB/D 4K Interactiva, Ultra HD (3840x2160), Android 11",
        stock: 12,
        category: "monitor",
        image: "/img/items/hikvision_ds_d5b75rb.png",
        price: 1736949
      },
      {
        id: 25,
        name: "MONITOR SAMSUNG ULTRAWIDE 34 PULGADAS",
        description: "Monitor Samsung Monitor S5 34″ VA UltraWide WQHD 3440×1440, 100Hz HDR10, DP/HDMI",
        stock: 7,
        category: "monitor",
        image: "/img/items/samsung_ultrawide_viewfinity_34.png",
        price: 303770
      }
  ]

  const getProducts = new Promise((resolve, reject) => {
    //simulamos un retraso de red con setTimeout
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
  
  export default getProducts