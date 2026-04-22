import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import {
  Cpu,
  Server,
  Battery,
  Home,
  Radio,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronDown,
  Search,
  Antenna,
  ImageIcon,
  ThumbsUp,
  Link2,
  Check,
  Camera,
  Droplet,
  Zap,
  Wifi,
  Gauge,
  Activity,
  Lightbulb,
  Sun,
  Cloud
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const cm4_5gImg1 = "/images/image_1772515540147.jpg";
const cm4_5gImg2 = "/images/image_1772515544449.jpg";
const cm4_5gImg3 = "/images/image_1772515547834.jpg";
const cm4_5gImg4 = "/images/image_1772515551954.jpg";
const cm4_5gImg5 = "/images/image_1772515556146.jpg";
const nrf5340Img1 = "/images/image_1772515758669.jpg";
const nrf5340Img2 = "/images/image_1772515763033.jpg";
const nrf5340Img3 = "/images/image_1772515767252.jpg";
const nrf5340Img4 = "/images/image_1772515771234.jpg";
const nrf5340Img5 = "/images/image_1772515774949.jpg";
const jetsonImg1 = "/images/image_1772515895194.jpg";
const jetsonImg2 = "/images/image_1772515899432.jpg";
const jetsonImg3 = "/images/image_1772515903228.jpg";
const jetsonImg4 = "/images/image_1772515906659.jpg";
const jetsonImg5 = "/images/image_1772515910441.jpg";
const lorawanGwImg1 = "/images/image_1772516000947.jpg";
const lorawanGwImg2 = "/images/image_1772516005151.jpg";
const lorawanGwImg3 = "/images/image_1772516009642.jpg";
const lorawanGwImg4 = "/images/image_1772516014589.jpg";
const predMaintImg1 = "/images/image_1772518205107.jpg";
const predMaintImg2 = "/images/image_1772518221506.jpg";
const predMaintImg3 = "/images/image_1772518228852.jpg";
const predMaintImg4 = "/images/image_1772518235099.jpg";
const psuVideo = "/images/project-power-supply.mp4";
const psuImg1 = "/images/image_1772543835349.jpg";
const psuImg2 = "/images/image_1772543842115.jpg";
const psuImg3 = "/images/image_1772543847124.jpg";
const motorVideo = "/images/project-motor-controller.mp4";
const netduino_cam_1 = "/images/netduino_cam1.jpg";
const netduino_cam_2 = "/images/netduino_cam3.jpg";
const netduino_cam_3 = "/images/netduino_cam4.jpg";
const netduino_cam_4 = "/images/netduino_cam2.jpg";
const ne101_mqtt_lte_iot_camera_1 = "/images/ne101_mqtt_lte_iot_camera_1.jpg";
const ne101_mqtt_lte_iot_camera_2 = "/images/ne101_mqtt_lte_iot_camera_2.jpg";
const ne101_mqtt_lte_iot_camera_3 = "/images/ne101_mqtt_lte_iot_camera_3.jpg";
const ne101_mqtt_lte_iot_camera_4 = "/images/ne101_mqtt_lte_iot_camera_4.jpg";
const ne101_mqtt_lte_iot_camera_5 = "/images/ne101_mqtt_lte_iot_camera_5.jpg";
const ne101_mqtt_lte_iot_camera_6 = "/images/ne101_mqtt_lte_iot_camera_6.jpg";
const ne101_mqtt_lte_iot_camera_7 = "/images/ne101_mqtt_lte_iot_camera_7.jpg";
const ne101_mqtt_lte_iot_camera_8 = "/images/ne101_mqtt_lte_iot_camera_8.jpg";
const pi_camera_doorbell_notifications_1 =
  "/images/pi_camera_doorbell_notifications_1.jpg";
const pi_camera_doorbell_notifications_2 =
  "/images/pi_camera_doorbell_notifications_2.jpg";
const pi_camera_doorbell_notifications_3 =
  "/images/pi_camera_doorbell_notifications_3.jpg";
const pi_camera_doorbell_notifications_4 =
  "/images/pi_camera_doorbell_notifications_4.jpg";
const pi_camera_doorbell_notifications_5 =
  "/images/pi_camera_doorbell_notifications_5.jpg";


interface MediaItem {
  type: "image" | "video";
  src: string;
  poster?: string;
}

interface FilterCategory {
  name: string;
  slug: string;
}

export const filterCategories: FilterCategory[] = [
  { name: "All Projects", slug: "all" },
  { name: "PCB & Hardware", slug: "pcb-hardware" },
  { name: "Firmware", slug: "embedded-firmware" },
  { name: "FPGA & Digital", slug: "fpga-digital-design" },
  { name: "Linux & BSP", slug: "embedded-linux-bsp" },
  { name: "IoT & Connectivity", slug: "iot-connected-devices" },
];

interface ContentSection {
  heading?: string;
  body?: string;
  bullets?: Array<string | { text: string; sub?: string[] }>;
  images?: string[];
  numbered?: Array<{ title: string; body: string; image?: string }>;
  code?: string[];
}

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  icon: typeof Server;
  highlight: string;
  media: MediaItem[];
  deliverables: string[];
  filterSlugs: string[];
  hidden?: boolean;
  sections?: ContentSection[];
}

const projects: Project[] = [
  {
    slug: "e2b4c9",
    title: "High-Speed Vision Processing Carrier for Adaptive SoM Platform",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-linux-bsp", "pcb-hardware"],
    description: "Advanced carrier board for an FPGA-based system-on-module featuring high-bandwidth camera interfaces, display outputs, storage, and expansion for embedded vision workloads.",
    longDescription: "Designed a high-performance carrier platform for an adaptive FPGA system-on-module focused on embedded vision, video processing, and AI edge applications. The board expands the compute module with high-speed camera inputs, display connectivity, storage interfaces, FMC expansion, and peripheral I/O. Special attention was given to signal integrity, high-speed routing, and scalable interface architecture required for professional imaging systems.",
    tags: [
      "FPGA",
      "Carrier Board",
      "Embedded Vision",
      "High-Speed PCB",
      "Camera Interfaces",
      "DisplayPort",
      "FMC",
      "Edge AI"
    ],

    icon: Cpu,
    highlight: "Vision FPGA Carrier",

    hidden: true,

    media: [
      {
        type: "image",
        src: "/images/_ska4fqzqrs_blob_copy_DZtriN08A0.jpg"
      }
    ],

    deliverables: [
      "Carrier board for adaptive FPGA compute module",
      "High-speed camera interface integration",
      "Display + storage + USB expansion",
      "FMC mezzanine expansion support",
      "Embedded vision ready hardware platform",
      "Signal-integrity focused PCB architecture"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a high-bandwidth carrier board for an FPGA-based system-on-module intended for embedded vision and AI edge processing. The platform enables rapid deployment of camera-centric systems requiring real-time video acquisition, acceleration, and external expansion. :contentReference[oaicite:0]{index=0}"
      },

      {
        heading: "Compute Platform Architecture",
        body: "The design is centered around a powerful adaptive SoM containing programmable logic, processing cores, memory, non-volatile storage, and board-to-board connectors exposing high-speed user I/O.",
        images: [
          "/images/kria_k26_som_aNCEf3WgVZ.jpg"
        ]
      },

      {
        heading: "Vision Interface Design",
        body: "The carrier board was optimized for demanding camera workloads and multi-stream video applications.",
        bullets: [
          "High-speed serialized image sensor inputs",
          "MIPI camera connectivity",
          "Dual display outputs",
          "USB 3.0 high-throughput peripherals",
          "Low-latency video pipeline support"
        ],
        images: [
          "/images/aper-oculus-front-01_jpg_md-fixed-xl_xngAOPtMB1.jpg",
          "/images/t-6_products_image-sensor_industry_slvs-ec02_en_Fbp89fdzfw.jpg"
        ]
      },

      {
        heading: "Expansion & Peripheral Interfaces",
        body: "The board includes flexible expansion paths for custom I/O, acquisition hardware, and storage acceleration.",
        bullets: [
          "FMC expansion connector",
          "M.2 peripheral support",
          "GPIO / PMOD style expansion",
          "SATA storage interface",
          "External mezzanine compatibility"
        ],
        images: [
          "/images/aper-oculus_LjQ2Nj6zoS.jpg"
        ]
      },

      {
        heading: "PCB Engineering Focus",
        body: "Implementation required controlled impedance routing, differential pair matching, connector breakout strategy, and power distribution suitable for mixed FPGA + video workloads."
      },

      {
        heading: "Platform Benchmarking",
        body: "The architecture was positioned as a premium carrier solution by combining rare interface support with strong expansion capability and camera-focused hardware design.",
        images: [
          "/images/comparison_chart_j9hKnpl8e6.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates advanced expertise in FPGA carrier board development, high-speed PCB layout, embedded vision hardware, and scalable compute platform integration. It highlights the ability to engineer production-grade imaging systems requiring complex interface routing and real-time processing infrastructure."
      }
    ]
  },
  {
    slug: "a8c3f2",
    title: "Industrial Edge Compute Carrier Board",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp", "fpga-digital-design"],
    description: "Custom carrier board for edge computing modules with Raspberry Pi–form-factor compatibility and multi-interface peripheral support.",
    longDescription: "Custom carrier platform for edge computing system-on-modules, designed for compatibility, flexibility, and high-speed peripheral integration. Raspberry Pi–compatible form factor allows reuse of existing ecosystems while providing advanced compute capabilities. Integrates Ethernet, USB, JTAG/UART interfaces, SD storage, and fully accessible GPIO routed to programmable logic. Emphasis on layout constraints, connector alignment, power sequencing, and high-speed interface integration resulted in a compact multi-layer PCB suitable for embedded AI and robotics applications.",
    tags: [
      "PCB Design",
      "Carrier Board",
      "Edge Computing",
      "High-Speed Design",
      "Embedded Systems",
      "KiCad",
      "FPGA Systems"
    ],
    icon: Cpu,
    highlight: "Carrier Board Design",
    media: [
      {
        type: "image",
        src: "/images/_zJ41sg2WrV.jpg"
      }
    ],
    hidden: false,
    deliverables: [
      "Custom Carrier Board Architecture",
      "Multi-Interface Hardware Design",
      "High-Speed PCB Layout",
      "Peripheral Integration System",
      "Edge Compute Platform Design"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Custom carrier platform designed for edge computing modules, combining high-performance processing with a widely supported hardware ecosystem. Allows integration of existing accessories and expansion through custom hardware.",
        images: [
          "/images/mockup_6JvfupHzEW.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "Integration of high-speed and standard interfaces into a compact form factor, enabling flexible deployment for robotics and edge AI applications.",
        bullets: [
          "Ethernet interface for high-speed networking",
          "USB subsystem for peripheral connectivity",
          "Dedicated JTAG and UART debugging interfaces",
          "SD card interface for storage and boot",
          "40-pin GPIO header for expansion and customization"
        ]
      },
      {
        heading: "Core Hardware Integration",
        numbered: [
          {
            title: "Module Connector Interface",
            body: "High-density board-to-board connectors interface with the compute module, routing critical signals while maintaining layout integrity.",
            image: "/images/som_connectors_mJpzpMsKbH.jpg"
          },
          {
            title: "Ethernet Subsystem",
            body: "Gigabit-capable Ethernet implemented with dedicated PHY and RJ45 connector for reliable high-speed communication.",
            image: "/images/ethernet.jpg"
          },
          {
            title: "Debug & Programming Interface",
            body: "USB-based debugging via FTDI and direct JTAG interface provide flexible programming and diagnostics.",
            image: "/images/ftdi_wnqTE2RjpX.jpg"
          }
        ]
      },
      {
        heading: "Peripheral Integration",
        body: "Extends system functionality through multiple integrated peripheral interfaces.",
        bullets: [
          "USB PHY for external device connectivity",
          "GPIO routed to programmable logic for flexibility",
          "Standard expansion header compatibility",
          "Modular peripheral architecture"
        ],
        images: [
          "/images/usb_phy_Au69HL294v.jpg",
          "/images/periph_connectors_nER2srhq72.jpg"
        ]
      },
      {
        heading: "GPIO & System Flexibility",
        body: "All GPIO signals routed to programmable logic, enabling full reconfigurability and custom interface design.",
        images: [
          "/images/rpi_gpio_uhy8PyvFFw.jpg"
        ]
      },
      {
        heading: "Storage Interface",
        body: "SD card circuitry integrated for system boot and data storage using reference design patterns.",
        images: [
          "/images/sd_card_gXRYhJ7V29.jpg"
        ]
      },
      {
        heading: "PCB Layout & Constraints",
        body: "Layout addresses connector alignment, mechanical constraints, and high-density routing within a compact multi-layer PCB.",
        bullets: [
          "Multi-layer PCB design for signal integrity",
          "Precise connector spacing and mechanical alignment",
          "Compact routing under space constraints",
          "Optimized placement for dense component layout"
        ],
        images: [
          "/images/layout0_hnjUD4cAXc.jpg",
          "/images/layout1_i8TyWDEqdK.jpg",
          "/images/layout2_6nYmrYTYvF.jpg",
          "/images/layout5_AB0xAZ8wK4.jpg",
          "/images/layout6_8NQwHBBEek.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates advanced PCB design and system integration, including high-speed interface design, multi-layer routing, and hardware platform development for edge computing systems. Highlights ability to design complex carrier architectures for scalable embedded and AI applications."
      }
    ]
  },
  {
    slug: "m9c4e7",
    title: "Compact x86 Compute Module Carrier Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp", "hardware-design"],
    description: "High-density carrier board for an x86 compute module integrating Ethernet, HDMI, USB, M.2 expansion, camera interface, and USB-C power delivery.",
    longDescription: "Designed a compact custom carrier board for an x86 compute module to enable desktop-class computing in embedded form factors. The platform expands the module into a deployable system by integrating high-speed I/O, networking, display output, storage and wireless expansion, camera connectivity, active cooling support, and USB-C power delivery. The hardware focuses on signal integrity, manufacturability, and real-world integration for edge computing, robotics, industrial control, and portable embedded systems.",
    tags: [
      "Carrier Board",
      "x86 Embedded",
      "High-Speed PCB",
      "Ethernet",
      "HDMI",
      "USB-C PD",
      "M.2",
      "KiCad"
    ],

    icon: Cpu,
    highlight: "x86 Carrier Board",

    hidden: true,

    media: [
      {
        type: "image",
        src: "/images/_wOWGZfnOJ9.jpg"
      }
    ],

    deliverables: [
      "Custom 4-layer carrier PCB for x86 compute module",
      "Gigabit Ethernet + HDMI integration",
      "USB 2.0 / USB 3.0 connectivity",
      "M.2 expansion interfaces",
      "CSI camera + debug interfaces",
      "USB-C PD power architecture"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a compact carrier platform for an x86 compute module, transforming a high-performance SoM into a practical embedded computing solution with integrated display, networking, storage expansion, and peripheral connectivity. :contentReference[oaicite:0]{index=0}"
      },

      {
        heading: "System Architecture",
        body: "The carrier board extends the compute module through high-speed interfaces and embedded I/O required for real-world deployments.",
        bullets: [
          "Gigabit Ethernet connectivity",
          "HDMI display output",
          "USB 2.0 and USB 3.0 interfaces",
          "M.2 expansion sockets",
          "CSI camera connector",
          "I2C expansion header",
          "UART debug interface",
          "Fan header for thermal control"
        ],
        images: [
          "/images/screenshot_2025-12-23_at_09_45_47_cg7EFKUjj6.jpg",
          "/images/screenshot_2025-12-23_at_09_55_08_XM6p1bWLp2.jpg"
        ]
      },

      {
        heading: "PCB Design Implementation",
        body: "The board was implemented as a compact multilayer design optimized for routing density, controlled impedance paths, and connector accessibility. Particular focus was placed on high-speed signal breakout and mechanical integration.",
        bullets: [
          "4-layer PCB stack-up",
          "Dense connector routing",
          "Power / signal plane separation",
          "Compact edge-compute form factor",
          "Manufacturing-ready layout"
        ],
        images: [
          "/images/screenshot_2025-12-20_at_16_14_33_ptyHC7ldn6.jpg",
          "/images/image_eA9DqA7geH.jpg",
        ]
      },

      {
        heading: "Power Architecture",
        body: "USB-C Power Delivery input at 12V enables compact external powering while supporting compute-module and peripheral loads. The architecture is suitable for mobile and embedded deployments."
      },

      {
        heading: "Expansion Capability",
        body: "M.2 interfaces allow wireless modules, NVMe storage, or accelerator expansion, making the platform adaptable for AI edge nodes, gateways, robotics controllers, and industrial systems."
      },

      {
        heading: "Mechanical Integration",
        body: "The system includes enclosure-ready mounting and CNC housing direction for deployment-grade packaging.",
        images: [
          "/images/screenshot_2025-12-24_at_23_46_09_I7xoxfFxez.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates advanced experience in carrier board development, high-speed PCB layout, power architecture, and embedded compute platform integration. It highlights the ability to convert complex SoMs into production-ready hardware platforms for commercial deployment."
      }
    ]
  },
  {
    slug: "a9e7f1",
    title: "Scalable EV Battery Management System",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "pcb-hardware", "power-electronics"],
    description: "Battery Management System (BMS) for high-performance electric vehicle applications, supporting scalable cell monitoring and balancing.",
    longDescription: "Scalable BMS for electric vehicles designed to monitor multiple battery cells, auxiliary inputs, and daisy-chained ICs, capable of measuring up to 256 cells in a single network. Provides safe cell operation, voltage balancing, and telemetry via CAN bus, optimized for high-performance EV racing applications.",
    tags: ["BMS", "EV", "STM32", "Power Electronics", "PCB Design", "Embedded Systems"],
    icon: Cpu,
    highlight: "Scalable EV Battery Monitoring",
    hidden: true,
    media: [
      { type: "image", src: "/images/_qfcRSffjLb.jpg" }
    ],
    deliverables: [
      "Scalable EV BMS with BQ76PL455 IC",
      "Safe cell monitoring and balancing",
      "CAN bus data output for telemetry",
      "Optimized for Formula SAE racing teams",
      "PCB layout and 3D model for rapid prototyping"
    ],
    sections: [
      {
        heading: "Components Used",
        bullets: [
          "Texas Instruments BQ76PL455 IC ×1"
        ]
      },
      {
        heading: "System Overview",
        body: "Monitors individual battery cells, auxiliary inputs for temperature, and allows daisy-chaining of up to 15 ICs, enabling measurement of up to 256 cells. Designed to provide scalable, safe operation and real-time telemetry for high-performance EV applications."
      },
      {
        heading: "Schematics & Hardware",
        images: [
          "/images/pcb_layout_QBbFFRFEJj.jpg",
          "/images/real_cut_S1i9IADIfg.jpg"
        ]
      }
    ]
  },
  {
    slug: "d7f4c8",
    title: "High-Precision Multi-Mode BLDC Motor Controller",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "power-electronics"],
    description: "Custom BLDC motor controller PCB with STM32F4 MCU, DRV8301 gate drivers, and high-current three-phase power stage.",
    longDescription: "This project demonstrates the design and assembly of a professional BLDC motor controller PCB capable of precise speed and torque control. It integrates STM32F4 microcontroller, DRV8301 gate drivers, and a three-phase high-current power stage with comprehensive thermal and signal integrity management. The platform is designed for industrial automation applications, enabling compact form factor deployment with reliable performance.",
    tags: ["BLDC", "Motor Control", "STM32F4", "DRV8301", "PCB Design", "Power Electronics", "Embedded Systems"],
    icon: Gauge,
    highlight: "Professional BLDC Motor Control",
    hidden: true,
    media: [
      { type: "image", src: "/images/_5cSan2KQek.jpg" }
    ],
    deliverables: [
      "Turnkey BLDC motor controller PCB",
      "STM32F4 MCU with SPI/UART interfaces",
      "DRV8301 gate drivers for high-current FETs",
      "Three-phase half-bridge power stage",
      "Thermal and signal integrity optimized PCB",
      "Functional validation with 400W BLDC motor"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Complete development of a high-performance BLDC motor controller from schematic design to assembly and functional testing. The PCB supports industrial automation requiring precise motor control and efficient thermal management."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "STM32F103RB compatible microcontroller (Leaf Maple / Mini MapleTree)",
          "DRV8301 gate driver IC (Texas Instruments)",
          "Three-phase half-bridge MOSFETs",
          "4-layer PCB, 95×75 mm",
          "Current sensing via low-side shunt resistors"
        ],
      },
      {
        heading: "Design Specifications",
        bullets: [
          "Input voltage: 24–48V DC",
          "Continuous current: 20A",
          "PWM frequency: up to 20 kHz",
          "Layer count: 4-layer PCB",
          "Thermal and overcurrent protection integrated"
        ]
      },
      {
        heading: "Schematic Design",
        body: "Schematic created in Altium Designer covering power stage, gate drive, current sensing, MCU interface, and protection circuits.",
        images: [
          "/images/circuit_drv8301_tq3pzziuDb.jpg"
        ]
      },
      {
        heading: "PCB Layout & Thermal Management",
        body: "Critical layout considerations were applied to minimize parasitic inductance, optimize thermal dissipation, and maintain signal integrity across power and analog sections.",
        bullets: [
          "Power loops minimized for high-current paths",
          "MOSFETs placed near board edge with thermal copper connected to chassis",
          "Gate drive traces matched and kept short",
          "Analog current sense traces routed away from switching nodes"
        ]
      },
      {
        heading: "Assembly & Validation",
        body: "Turnkey PCB assembly included solder paste application, automated pick-and-place, reflow soldering, AOI inspection, and manual through-hole soldering. Functional testing verified motor spin-up, current measurement, and thermal performance at full load.",
        bullets: [
          "First-pass yield: 98.5%",
          "Smooth torque control with 400W BLDC motor",
          "Thermal performance validated up to 50°C ambient"
        ]
      },
      {
        heading: "Firmware Integration",
        body: "STM32 firmware includes initialization, PWM generation, and DRV8301 control routines for full 6-channel PWM operation.",
        code: [
          "// Example DRV8301 initialization",
          "DRV8301_Init();",
          "TIM1_PWM_Init();",
          "__HAL_TIM_SET_COMPARE(&htim1, TIM_CHANNEL_1, 500);",
          "__HAL_TIM_SET_COMPARE(&htim1, TIM_CHANNEL_2, 500);",
          "__HAL_TIM_SET_COMPARE(&htim1, TIM_CHANNEL_3, 500);"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates end-to-end professional BLDC motor controller development including embedded firmware, high-current power stage, thermal and signal integrity design, PCB layout, and turnkey assembly suitable for industrial applications."
      }
    ]
  },
  {
    slug: "e4a1b2",
    title: "Compact High-Power USB-C Power Input Module",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description: "USB-C PD sink module supporting up to 20V 5A, with optional I2C telemetry for embedded integration and inline deployment.",
    longDescription: "Compact USB-C Power Delivery sink board based on the Cypress CYPD3177 controller. Replaces conventional barrel-jack input with USB-C PD interface. Supports voltage levels 5V, 9V, 12V, and 20V and currents from 1A to 5A. Optional I2C interface allows monitoring and integration with embedded hosts. Implemented on a 2 oz copper PCB with a detachable telemetry section, suitable for inline cable integration and embedded system installations.",
    tags: [
      "USB-C PD",
      "CYPD3177",
      "Power Electronics",
      "PCB Design",
      "I2C Telemetry",
      "High Current Design",
      "Embedded Hardware"
    ],
    icon: Zap,
    highlight: "USB-C PD",
    media: [
      {
        type: "image",
        src: "/images/_BLGl2VleYg.jpg"
      }
    ],
    hidden: false,
    deliverables: [
      "USB-C PD Sink PCB",
      "Power Negotiation Hardware",
      "Voltage/Current Selection Design",
      "I2C Telemetry Interface",
      "Inline Integration-Ready Hardware"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "USB-C PD sink module replacing conventional barrel power connectors with negotiation-based USB-C input. Designed for embedded systems and standalone electronics to draw power safely from standard USB-C PD adapters without requiring firmware."
      },
      {
        heading: "Core Design Concept",
        body: "Board follows Cypress BCR (Barrel Connector Replacement) architecture, providing a drop-in USB-C PD power source for devices previously relying on DC adapters.",
        bullets: [
          "Operates as a USB-C PD sink device",
          "Negotiates power from compliant USB-C PD sources",
          "Exposes output via screw terminals or direct solder connection",
          "Replaces legacy power adapters with a compact inline module"
        ]
      },
      {
        heading: "Power Delivery Features",
        bullets: [
          "Selectable output voltages: 5V, 9V, 12V, 20V",
          "Selectable current levels: 1A, 2A, 3A, 5A",
          "Maximum power capability up to 100W",
          "Hardware-based configuration (no firmware required)",
          "Pre-configuration required before power-up"
        ]
      },
      {
        heading: "Hardware Architecture",
        numbered: [
          {
            title: "USB-C PD Controller Stage",
            body: "CYPD3177 handles USB Power Delivery negotiation with source adapters, enabling automatic contract establishment without external firmware."
          },
          {
            title: "Efficient Power Switching",
            body: "Low Rds_on DMP3013SFV p-channel MOSFET delivers high current efficiently while minimizing thermal losses."
          },
          {
            title: "Compact High-Current PCB",
            body: "PCB implemented on 53 mm × 15.4 mm 2 oz copper, supporting high current in a compact, inline-friendly form factor."
          }
        ]
      },
      {
        heading: "Configuration & Operation",
        bullets: [
          "No programming required for standalone use",
          "Voltage and current configured via resistors or switches",
          "LED failure indicator for diagnostics",
          "Designed to prevent unsafe high-voltage conditions",
          "Lead-free assembly for production readiness"
        ]
      },
      {
        heading: "Telemetry Interface",
        body: "Optional I2C interface provides access to controller registers for monitoring and integration.",
        bullets: [
          "I2C access to status and control registers",
          "Compatible with 3.3V hosts such as Arduino Due",
          "Supports external scripts for inspection and testing"
        ]
      },
      {
        heading: "Mechanical Integration",
        body: "Module supports compact inline integration into cables and embedded systems.",
        bullets: [
          "Inline cable integration capability",
          "Supports heat-shrink enclosure for permanent installation",
          "Detachable telemetry section for compact use",
          "Adaptable height depending on component population"
        ],
        images: [
          "/images/cables_VoeFMS9dBO.jpg",
          "/images/heatschrink5_Z2jsInvZvb.jpg"
        ]
      },
      {
        heading: "Schematics",
        images: [
          "/images/boardd_5PbUd9n7An.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Final design delivers a compact, high-power USB-C PD sink module with configurable voltage and current, optional telemetry, and robust PCB design for embedded and inline applications."
      }
    ]
  },
  {
    slug: "b3f6d1",
    title: "Autonomous Vibration Intelligence Node for Infrastructure Monitoring",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "embedded-ai"],
    description: "Solar-powered vibration monitoring system with embedded AI for anomaly detection in industrial and logistics infrastructure.",
    longDescription: "Designed a fully autonomous vibration monitoring node capable of detecting structural and mechanical anomalies using embedded AI. The system integrates a high-bandwidth industrial accelerometer, ultra-low-power wireless communication, and solar energy harvesting with Lithium-Ion Capacitor (LIC) storage. Optimized for long-term deployment, the platform continuously captures vibration data, performs frequency-domain analysis, and applies TinyML-based models to classify abnormal patterns in real time. The architecture is tailored for logistics infrastructure such as railways, bridges, and transport systems where predictive maintenance is critical.",

    tags: [
      "Vibration Monitoring",
      "Embedded AI",
      "TinyML",
      "LoRa",
      "Low Power Design",
      "Industrial IoT",
      "Signal Processing"
    ],

    icon: Activity,
    highlight: "Edge AI Monitoring",

    hidden: false,

    media: [
      {
        type: "image",
        src: "/images/_TNpoG1kiQf.jpg"
      }
    ],

    deliverables: [
      "Solar-powered embedded monitoring node",
      "Vibration data acquisition and FFT processing",
      "TinyML-based anomaly detection model",
      "Ultra-low-power firmware architecture",
      "LoRa-based long-range communication system"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed an автономous vibration monitoring system for industrial and logistics infrastructure. The platform continuously measures vibration signals and detects anomalies using embedded AI, enabling predictive maintenance and early fault detection."
      },

      {
        heading: "Hardware Architecture",
        body: "The system integrates sensing, processing, communication, and energy harvesting into a compact embedded platform.",
        bullets: [
          "Wio-WM1110 module with integrated MCU and LoRa communication",
          "IIS3DWB high-bandwidth industrial accelerometer",
          "Solar energy harvesting using multiple micro solar cells",
          "Lithium-Ion Capacitor (LIC) for long lifecycle energy storage",
          "Custom PCB optimized for ultra-low-power operation"
        ],
        images: [
          "/images/module_KWi6fuxF66.jpg",
        ]
      },

      {
        heading: "Mechanical & Deployment Design",
        body: "A transparent enclosure was used to protect the system while maintaining solar exposure, enabling reliable outdoor deployment.",
        images: [
          "/images/3d_caja_lsR0fDqRqX.jpg",
          "/images/circuito-1_338G53j3xU.jpg",
          "/images/circuito-3_yDrlZ46rDW.jpg"
        ]
      },

      {
        heading: "Power Optimization",
        body: "Power efficiency is critical for autonomous operation. The system is optimized for ultra-low consumption with aggressive sleep strategies.",
        bullets: [
          "Deep sleep current ~12µA",
          "Transmission spikes up to ~48mA during LoRa communication",
          "Energy harvesting ensures continuous operation",
          "LIC storage enables high cycle durability (~10× LiPo lifecycle)"
        ],
        images: [
          "/images/deep_sleep_Mh0mAYcdvj.jpg",
          "/images/simple_lora_application-lora_transmit_SgvKe699LQ.jpg"
        ]
      },

      {
        heading: "Vibration Signal Processing",
        body: "High-resolution vibration data is captured and analyzed in both time and frequency domains.",
        bullets: [
          "Sampling frequency: 1024 Hz",
          "3-axis vibration measurement",
          "FFT analysis for frequency-domain insights",
          "Detection of imbalance, misalignment, and wear patterns"
        ],
        images: [
          "/images/whatsapp_image_2023-07-26_at_16_05_31_OaQN9PmUKg.jpg",
          "/images/whatsapp_image_2023-07-26_at_16_05_31(1)_24YB1El1lQ.jpg",
          "/images/whatsapp_image_2023-07-26_at_16_05_33_xyPp7vMy3R.jpg"
        ]
      },

      {
        heading: "Anomaly Detection with Embedded AI",
        body: "Machine learning models were trained using vibration data to detect abnormal behavior directly on the device.",
        bullets: [
          "Feature extraction from vibration signals",
          "Model training using iterative optimization",
          "On-device anomaly classification",
          "Real-time detection without cloud dependency"
        ],
        images: [
          "/images/abnormal_signal_t0bnswp62a.jpg",
          "/images/iterations_WiSnpXEoIY.jpg",
          "/images/detection_benchmark_V9URsWySwC.jpg"
        ]
      },

      {
        heading: "Applications",
        body: "The system is designed for deployment in infrastructure monitoring and predictive maintenance scenarios.",
        bullets: [
          "Railway and bridge structural monitoring",
          "Road and transport infrastructure diagnostics",
          "Industrial machinery condition monitoring",
          "Marine and cargo transport vibration analysis"
        ],
        images: [
          "/images/cylog_7BVkAYoO11.jpg",
          "/images/dynamic_logistics_wVarNw9GOR.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates advanced system-level design combining ultra-low-power electronics, energy harvesting, high-frequency signal processing, and embedded AI. It highlights strong capability in developing autonomous IoT systems for predictive maintenance and real-world industrial deployment."
      }
    ]
  },
  {
    slug: "d6f3b8",
    title: "Programmable DC Load & Power Characterization Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "power-electronics"],
    description: "Precision electronic load system using ESP32-S3 with closed-loop current control, power telemetry, thermal management, and wireless dashboard logging.",
    longDescription: "Designed an advanced programmable DC load for validating power supplies, batteries, converters, and embedded power rails. The platform uses an ESP32-S3 controller with PID-regulated constant current sinking, precision shunt measurement, thermal protection, local user interface, and WiFi telemetry streaming. The system combines analog control hardware, high-current power dissipation, digital feedback control, and real-time monitoring into a compact engineering test instrument.",

    tags: [
      "Electronic Load",
      "ESP32-S3",
      "Power Electronics",
      "PID Control",
      "Current Sink",
      "Telemetry",
      "Thermal Design",
      "Test Equipment"
    ],

    icon: Zap,
    highlight: "Programmable Load Tester",

    hidden: false,

    media: [
      {
        type: "image",
        src: "/images/image_FSqB8efF26.jpg"
      }
    ],

    deliverables: [
      "Programmable constant-current electronic load",
      "PID closed-loop current regulation",
      "100W-class thermal power stage",
      "Touch interface + OLED display",
      "WiFi telemetry to dashboard server",
      "Custom KiCad PCB design"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a digitally controlled DC load for testing power sources under programmable current demand. The system regulates sink current in real time, measures electrical parameters, manages thermal behavior, and streams operating data to a dashboard environment. :contentReference[oaicite:0]{index=0}"
      },

      {
        heading: "Control Architecture",
        body: "The load uses precision current feedback and firmware control to maintain a requested current setpoint across varying source voltages.",
        bullets: [
          "Closed-loop PID regulation",
          "Programmable current sink operation",
          "10 mA step resolution",
          "Wide operating load range",
          "Soft-start current ramping"
        ],
        images: [
          "/images/image_UuOW8hrEiv.jpg"
        ]
      },

      {
        heading: "Measurement Subsystem",
        body: "A precision shunt and high-resolution current monitor provide accurate measurement of voltage, current, and power during dynamic loading conditions.",
        bullets: [
          "High-side current sensing",
          "Power computation in firmware",
          "Real-time feedback loop input",
          "High-resolution telemetry capture"
        ]
      },

      {
        heading: "Power Stage Design",
        body: "The dissipation stage uses MOSFET-based linear control with heatsink mounting and thermal coupling optimized for sustained high-power testing.",
        bullets: [
          "MOSFET sink element",
          "Up to ~100W operating class",
          "Wide input voltage compatibility",
          "Protection-oriented derating strategy"
        ],
        images: [
          "/images/image_FgrNSXRepL.jpg",
          "/images/image_FSqB8efF26.jpg"
        ]
      },

      {
        heading: "Thermal Management",
        body: "An actively controlled CPU-class cooler is PWM-managed based on heatsink temperature to maintain safe junction conditions during prolonged stress testing."
      },

      {
        heading: "User Interface",
        body: "A capacitive touch matrix enables local setpoint adjustment and load control without mechanical encoders or buttons.",
        images: [
          "/images/image_BHB4pIZjfO.jpg",
          "/images/image_FXLLqYjZiU.jpg",
          "/images/pad_s_3wN4wQ4XQR.jpg"
        ]
      },

      {
        heading: "Cloud Logging & Analytics",
        body: "Operating data is transmitted over WiFi to a time-series database for live dashboards, trend analysis, and long-duration test logging.",
        images: [
          "/images/dashboard_DYoQUkn2wW.jpg"
        ]
      },

      {
        heading: "PCB Implementation",
        body: "The custom PCB was designed with segregated power and signal return paths, heavy-current routing, and close placement of sensing circuitry to improve accuracy and robustness.",
        images: [
          "/images/image_2qKmapYL8r.jpg",
          "/images/image_6Vy24RMDD4.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates strong capability in mixed-signal hardware, embedded control systems, power electronics, thermal engineering, and test instrumentation design. It highlights the ability to build professional-grade validation tools for power supply and battery development workflows."
      }
    ]
  },
  {
    slug: "f9c2d7",
    title: "FPGA Neural Network Acceleration Engine",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-firmware"],
    description: "High-throughput FPGA-based neural network inference using HLS, achieving over 200k FPS through pipelining, parallelism, and quantized integer computation.",
    longDescription: "Fully connected neural network inference engine implemented on FPGA using Vitis High-Level Synthesis (HLS) on the Kria KV260 platform. Targets small neural networks where traditional embedded frameworks introduce overhead. The design uses quantized integer arithmetic, pipelined vector-matrix multiplications, and parallelized compute structures to achieve high inference throughput. Workflow includes model quantization, HLS hardware generation, Vivado integration, and runtime execution with PYNQ. Comparison with RTL-based implementations highlights tradeoffs in resource efficiency and abstraction level.",
    tags: [
      "FPGA",
      "Vitis HLS",
      "Kria KV260",
      "PYNQ",
      "Deep Learning",
      "Quantization",
      "Parallel Computing"
    ],
    icon: Cpu,
    highlight: "FPGA AI Acceleration",
    media: [
      {
        type: "image",
        src: "/images/_41pDWgCaDU.jpg"
      }
    ],
    hidden: false,
    deliverables: [
      "HLS Neural Network Implementation",
      "Quantized Model Pipeline",
      "FPGA Bitstream and Vivado Integration",
      "PYNQ Runtime Interface",
      "Performance Benchmarking and Analysis"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Fully connected neural network inference engine deployed on FPGA to evaluate hardware acceleration performance. Focused on small networks where software frameworks introduce overhead."
      },
      {
        heading: "Neural Network Fundamentals",
        body: "Sequence of dense layers performing vector-matrix multiplications, followed by activation functions and quantization.",
        images: [
          "/images/network-1_nX3kYRKuCr.jpg",
          "/images/nn-1_EjOow0B27g.jpg"
        ]
      },
      {
        heading: "Quantization Strategy",
        body: "Floating-point model converted to integer arithmetic for efficient FPGA execution.",
        bullets: [
          "32-bit floating point converted to 8-bit / 16-bit integer",
          "Scaling factors implemented using bit-shift operations",
          "Reduced computational cost and memory bandwidth",
          "Minimal accuracy loss for small networks"
        ]
      },
      {
        heading: "HLS Architecture Design",
        body: "High-Level Synthesis enables rapid hardware design with high throughput through loop restructuring and parallelism.",
        bullets: [
          "Loop reordering to remove data dependencies",
          "Full pipelining of compute stages",
          "Vectorized matrix multiplication",
          "Parallel processing across multiple dimensions"
        ]
      },
      {
        heading: "FPGA Integration",
        body: "Generated HLS IP integrated into FPGA system using Vivado, with runtime deployment on PYNQ.",
        images: [
          "/images/screenshot_from_2022-07-19_17-03-50_gbWYavQZ3L.jpg",
          "/images/screenshot_from_2022-07-18_14-58-11_PpmwBfmdIh.jpg"
        ]
      },
      {
        heading: "Hardware Utilization Analysis",
        body: "Comparison between HLS and handcrafted RTL implementations to evaluate resource efficiency and abstraction tradeoffs.",
        bullets: [
          "HLS provides faster development but higher resource usage",
          "RTL allows DSP reuse across layers",
          "Tradeoff between design time and hardware efficiency"
        ],
        images: [
          "/images/screenshot_from_2022-07-27_08-08-53_fnXhHMarlo.jpg",
          "/images/screenshot_from_2022-07-27_08-08-33_4eyr88uqtR.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Achieved inference throughput exceeding 200,000 FPS through quantization, pipelining, and parallel processing. Demonstrates FPGA-based neural network acceleration, efficient HLS design, and hardware/software integration."
      }
    ]
  },
  {
    slug: "h6c5d1", // new unique hex slug
    title: "Precision Ultrasonic Distance Monitoring Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "sensor-integration", "hardware-design"],
    description: "PIC18F45K22-based embedded platform for high-accuracy distance measurement using an HC-SR04 ultrasonic sensor with binary LED output.",
    longDescription: "This project demonstrates a high-precision embedded distance measurement platform using a PIC18F45K22 microcontroller and HC-SR04 ultrasonic sensor. The system continuously measures distance in centimeters and outputs the value to an LED array in binary form. The platform leverages CCP modules for precise timing, interrupts for non-blocking measurement, and a 32 MHz oscillator for accurate timing. It includes simulation validation, robust GPIO configuration, and optimized firmware for real-time acquisition.",
    tags: ["PIC18F45K22", "Ultrasonic Sensor", "Embedded Systems", "Distance Measurement", "CCP Modules", "Real-Time Firmware"],
    icon: Activity,
    highlight: "High-Precision Ultrasonic Sensing",
    hidden: true,
    media: [
      { type: "image", src: "/images/hqdefault.jpg" }
    ],
    deliverables: [
      "PIC18F45K22 firmware for ultrasonic distance measurement",
      "HC-SR04 ultrasonic sensor integration",
      "Real-time binary LED display output",
      "Timer/CCP-based interrupt-driven architecture",
      "Proteus simulation setup for functional validation"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed a precision distance measurement platform using PIC18F45K22 and HC-SR04 ultrasonic sensor. The system calculates distance in centimeters and outputs the values to a binary LED array in real time."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "Microchip PIC18F45K22 MCU (32 MHz)",
          "HC-SR04 Ultrasonic Sensor",
          "Generic LEDs for binary display",
          "Solderless breadboard (half-size)",
          "Jumper wires and resistors (330 Ω)"
        ],
      },
      {
        heading: "Software Stack",
        bullets: [
          "mikroC PRO for PIC",
          "Proteus 8 simulation",
          "Serial debugging via PORTD LEDs"
        ],
      },
      {
        heading: "Measurement Methodology",
        body: "Distance is measured using the ultrasonic sensor in microsecond intervals. The microcontroller calculates distance in centimeters based on echo timing, outputs the value to PORTD LEDs in binary form, and handles the timing using CCP modules.",
        bullets: [
          "CCP1: compare module generates 10µs trigger pulses every 65.535ms",
          "CCP2: capture module measures echo pulse width",
          "Distance calculated as (time_us / 58) → cm",
          "Non-blocking measurement with interrupts for high precision"
        ]
      },
      {
        heading: "Firmware Implementation",
        code: [
          "sbit TRIG at LATC0_bit;",
          "sbit ECHO at RC1_bit;",
          "short i = 0;",
          "int Dist = 0;",
          "void interrupt() { /* CCP1/CCP2 interrupt handlers for distance calculation */ }",
          "void S_Distance() { CCPR1H=0; CCPR1L=10; TRIG=1; CCP1IE_bit=1; }",
          "void main() { /* MCU initialization, GPIO setup, timer configuration, infinite loop */ }"
        ]
      },
      {
        heading: "Schematics",
        images: [
          "/images/boardd_5PbUd9n7AX.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "The project demonstrates precision real-time distance measurement with embedded microcontrollers. It highlights skills in timer/CCP module usage, ultrasonic sensing, binary output display, and hardware/software co-design suitable for professional embedded system portfolios."
      }
    ]
  },
  {
    slug: "g4c8f2", // new unique hex slug
    title: "Autonomous CO₂ Monitoring & Environmental Control Platform",
    category: "IoT & Connected Devices",
    filterSlugs: ["embedded-firmware", "sensor-integration", "hardware-design"],
    description: "ESP32-based Wio Terminal system for real-time CO₂ monitoring, humidity and temperature sensing, with automated fan control and cloud connectivity.",
    longDescription: "This project demonstrates a robust embedded system for continuous monitoring of CO₂ levels, temperature, and humidity using the Wio Terminal platform. When CO₂ exceeds predefined thresholds, a 5V ventilation fan is automatically activated, and alerts are visualized on the built-in LCD screen. The system can also log environmental data for further analysis or transmit it to cloud services via the integrated Wi-Fi module. Designed for home, bedroom, or office deployment, it emphasizes real-time response, reliability, and scalability for IoT applications.",

    tags: [
      "ESP32",
      "Wio Terminal",
      "CO₂ Sensor",
      "Humidity & Temperature",
      "IoT",
      "Embedded Systems",
      "Automation",
      "Blynk"
    ],

    icon: Cloud,
    highlight: "Real-Time Environmental Monitoring",
    hidden: true,

    media: [
      { type: "image", src: "/images/_JESKkVKdRc.jpg" }
    ],

    deliverables: [
      "ESP32 firmware for CO₂, temperature, and humidity monitoring",
      "Wio Terminal LCD visualization",
      "Automated fan control via relay",
      "Blynk cloud dashboard integration",
      "Data logging and environmental analysis capability"
    ],

    sections: [
      {
        heading: "System Overview",
        body: "The platform continuously monitors CO₂ concentration, temperature, and relative humidity. Automated actions, such as switching on a ventilation fan, ensure safe and comfortable indoor air quality."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "Seeed Studio Wio Terminal",
          "Grove CO₂ / Temperature / Humidity Sensor (SCD41)",
          "Grove Relay Module for fan control",
          "Generic USB-powered 5V fan",
          "USB Micro-B breakout and jumper wires"
        ],
      },
      {
        heading: "Software Environment",
        bullets: [
          "Arduino IDE with Wio Terminal board support",
          "Sensirion I2C SCD4x library for CO₂ sensor",
          "TFT_eSPI library for LCD graphics"
        ],
      },
      {
        heading: "Hardware Integration",
        body: "CO₂ and environmental data are captured by the SCD41 sensor. Fan activation is handled through a relay module connected to the Wio Terminal D0 pin. The LCD displays live sensor readings and CO₂ status in ppm, temperature in °C, and relative humidity.",
        images: [
          "/images/picture1_oGEivQ6z86.jpg",
          "/images/co2_wirings_kkDFGdN8SV.jpg"
        ]
      },
      {
        heading: "Firmware Implementation",
        code: [
          "#include <SPI.h>",
          "#include <Wire.h>",
          "#include <TFT_eSPI.h>",
          "#include <SensirionI2CScd4x.h>",
          "#define CO2_THRESHOLD 1200",
          "SensirionI2CScd4x scd4x;",
          "TFT_eSPI tft = TFT_eSPI();",
          "void setup() { /* initialize Wio Terminal, sensor, and display */ }",
          "void loop() { /* periodic measurement, fan control, and LCD update */ }"
        ]
      },
      {
        heading: "LCD Display",
        body: "Live readings for CO₂, temperature, and humidity are visualized on the Wio Terminal LCD with intuitive icons and color coding for quick recognition."
      },
      {
        heading: "Schematics",
        images: [
          "/images/schematics_co2_wio_terminal_tP0LN81KTy.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "The system demonstrates full-stack embedded engineering, combining real-time sensor acquisition, actuator control, and cloud-enabled visualization. It highlights expertise in IoT system design, embedded firmware, environmental sensing, and automation for professional indoor air quality solutions."
      }
    ]
  },
  {
    slug: "i9d3f7", // new unique hex slug
    title: "IoT Temperature & Humidity Telemetry with Cloud Integration",
    category: "IoT & Connected Devices",
    filterSlugs: ["embedded-firmware", "sensor-integration", "cloud-integration"],
    description: "ESP32-based IoT system for real-time temperature and humidity monitoring using SHT31 sensor and Firebase cloud database.",
    longDescription: "This project demonstrates a real-time embedded IoT platform for environmental monitoring. The system uses an ESP32 or Raspberry Pi microcontroller to interface with an SHT31 I2C temperature and humidity sensor. Sensor readings are processed and transmitted over Wi-Fi to a Firebase Realtime Database, allowing for live data visualization, logging, and remote monitoring. The architecture emphasizes reliable data acquisition, cloud synchronization, and secure communication, suitable for professional IoT deployments.",
    tags: ["ESP32", "Raspberry Pi", "SHT31", "I2C", "Firebase", "IoT", "Humidity", "Temperature"],
    icon: Cloud,
    highlight: "Cloud-Connected Environmental Monitoring",
    hidden: true,
    media: [
      { type: "image", src: "/images/cws1_2-600x400_kZGQsO9o1v.jpg" },
    ],
    deliverables: [
      "ESP32 firmware for SHT31 sensor data acquisition",
      "Wi-Fi connectivity for real-time cloud updates",
      "Firebase Realtime Database integration",
      "Secure and structured JSON-based data logging",
      "Visual dashboard display for remote monitoring"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a reliable IoT platform for monitoring temperature and humidity, transmitting data to Firebase Realtime Database for live visualization and logging."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "Raspberry Pi 3 Model B or ESP32 Microcontroller",
          "SHT31 Temperature & Humidity Sensor",
          "I2C Communication Cable",
          "Power Supply (USB or 5V)",
          "Optional Breadboard for prototyping"
        ],
      },
      {
        heading: "Software Tools",
        bullets: [
          "Python for firmware and data acquisition",
          "Raspbian OS (Wheezy) for Raspberry Pi",
          "Python-Firebase library for data posting",
          "Optional development and simulation tools"
        ],
      },
      {
        heading: "Sensor Data Acquisition",
        body: "The SHT31 sensor communicates via I2C protocol. Data is read in 16-bit format, converted into temperature (°C/°F) and relative humidity, and sent to the microcontroller.",
        code: [
          "bus = smbus.SMBus(1)",
          "bus.write_i2c_block_data(0x44, 0x2C, [0x06])",
          "data = bus.read_i2c_block_data(0x44, 0x00, 6)",
          "temp = data[0]*256 + data[1]",
          "cTemp = -45 + (175 * temp / 65535.0)",
          "fTemp = -49 + (315 * temp / 65535.0)",
          "humidity = data[3]*256 + data[4]"
        ],
        images: [
          "/images/pasted_image_0.jpg",
          "/images/image_x4FFDFaCH2.jpg"
        ]
      },
      {
        heading: "Firebase Integration",
        body: "Sensor data is transmitted to Firebase Realtime Database using JSON POST requests. The database URL acts as the backend endpoint, enabling secure cloud synchronization.",
        code: [
          "from firebase import firebase",
          "firebase = firebase.FirebaseApplication('https://<Your_DB>.firebaseio.com')",
          "result = firebase.post('sensor_data', {'cTemp': str(cTemp), 'fTemp': str(fTemp), 'humidity': str(humidity)})"
        ],
        images: [
          "/images/pasted_image_2.jpg",
        ]
      },
      {
        heading: "Security Considerations",
        body: "For demonstration purposes, Firebase read/write rules can be temporarily set to true for public access. For production, authentication and secure rules must be implemented."
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates a professional IoT telemetry system, combining embedded firmware, sensor integration, I2C communication, real-time cloud logging, and data visualization. It highlights expertise in connecting microcontroller-based platforms to cloud services for real-time monitoring and IoT application development."
      }
    ]
  },
  {
    slug: "7a3e91",
    title: "WiFi-Enabled Embedded Access Logging System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "ESP8266-based RFID attendance system with cloud logging to Google Sheets via secure HTTP interface.",
    longDescription: "Embedded RFID attendance and access control system using ESP8266 and MFRC522. Reads RFID card data and transmits it over HTTPS to a Google Apps Script API, which logs data in Google Sheets in real time. Provides immediate user feedback via LEDs and buzzer while maintaining reliable WiFi connectivity. Architecture eliminates the need for a dedicated backend by using Google Sheets as a lightweight, serverless database.",
    tags: [
      "ESP8266",
      "RFID",
      "IoT",
      "HTTP",
      "Google Sheets API",
      "Embedded C",
      "Cloud Integration"
    ],
    icon: Wifi,
    highlight: "RFID IoT Attendance",
    media: [
      {
        type: "image",
        src: "/images/_3HddXBvRpD.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "ESP8266 Firmware",
      "RFID Reader Integration",
      "Cloud Logging API (Google Apps Script)",
      "Real-Time Attendance System",
      "Hardware Interface Design"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Cloud-connected attendance system automating RFID-based identification and logging data directly to a remote spreadsheet. Lightweight IoT-to-cloud pipeline eliminates the need for manual registers or complex backend infrastructure."
      },
      {
        heading: "System Architecture",
        body: "Embedded hardware interfaces with cloud-based logging service through secure and efficient communication architecture.",
        bullets: [
          "ESP8266 handles WiFi connectivity and HTTP communication",
          "MFRC522 reads RFID card data",
          "Google Apps Script serves as REST-like API",
          "Google Sheets functions as real-time database",
          "End-to-end flow: RFID → ESP8266 → HTTPS → Google Sheets"
        ],
        images: [
          "/images/circuit_rbJHBbM9hQ.jpg"
        ]
      },
      {
        heading: "Embedded Firmware Design",
        body: "Firmware designed for reliability and continuous operation in real-world environments.",
        bullets: [
          "Automatic WiFi reconnection handling",
          "HTTPS request generation for secure data transmission",
          "RFID block authentication and data extraction",
          "Serial debugging for network and HTTP status monitoring"
        ]
      },
      {
        heading: "Cloud Integration",
        body: "Serverless logging solution using Google Apps Script to process incoming RFID data.",
        bullets: [
          "ESP8266 transmits data via HTTP GET requests",
          "Google Script parses incoming data",
          "Data appended directly to spreadsheet rows",
          "Accessible, exportable, and easy to monitor"
        ]
      },
      {
        heading: "User Feedback Interface",
        body: "Real-time feedback improves usability and system clarity.",
        bullets: [
          "Green LED indicates successful read and upload",
          "Red LED signals errors or failed authentication",
          "Buzzer provides audible confirmation",
          "Double-beep pattern confirms valid scan"
        ]
      },
      {
        heading: "System Output",
        body: "Each RFID scan produces structured log entries in the cloud database.",
        bullets: [
          "User identification (RFID / name)",
          "Timestamp (date and time)",
          "Sequential logging for tracking"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates practical IoT architecture integrating embedded hardware and cloud services to provide a scalable, cost-effective attendance solution. Implements reliable network communication, secure data transmission, and cloud-based real-time logging."
      }
    ]
  },
  {
    slug: "b8d4f1",
    title: "Industrial Dual-MCU Embedded Controller",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "iot-connected-devices"],
    description: "Dual-microcontroller embedded platform combining ESP32 and RP2040 in Raspberry Pi form factor for industrial and continuous-operation environments.",
    longDescription: "High-reliability embedded controller integrating ESP32 and RP2040 in a Raspberry Pi 4 form factor. Designed for 24/7 industrial operation where Linux-based SBCs may fail due to SD card dependence and lack of hardware supervision. The ESP32 provides connectivity, memory, and processing capabilities, while the RP2040 acts as co-processor enabling GPIO expansion, Raspberry Pi header compatibility, and peripheral interfacing. Includes external watchdog, supercapacitor-backed RTC, Ethernet, WiFi, and expandable flash for robust deployment in sealed or industrial enclosures.",
    tags: [
      "ESP32",
      "RP2040",
      "Embedded Hardware",
      "PCB Design",
      "Industrial IoT",
      "Ethernet",
      "FreeRTOS"
    ],
    icon: Cpu,
    highlight: "Dual MCU Platform",
    media: [
      {
        type: "image",
        src: "/images/espiff-v3-angle-02_jpg_md-xl_vEo2gKvi8U.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "Custom dual-MCU PCB",
      "ESP32 + RP2040 system architecture",
      "Raspberry Pi form factor integration",
      "High-reliability hardware design",
      "Multi-interface embedded platform"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Dual-microcontroller embedded platform in Raspberry Pi form factor addressing reliability limitations of Linux SBCs. Supports HAT compatibility while providing a deterministic embedded architecture.",
        images: [
          "/images/_7fhyhPxdZv.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "Platform combines connectivity-focused MCU and flexible co-processor to deliver performance and interface compatibility.",
        bullets: [
          "ESP32 provides WiFi, Ethernet, flash, and PSRAM for application processing",
          "16 MB flash and 8 MB PSRAM support complex embedded workloads",
          "RP2040 acts as co-processor for GPIO and interface expansion",
          "40-pin header ensures Raspberry Pi HAT compatibility",
          "Designed to operate without Linux for improved determinism and reliability"
        ],
        images: [
          "/images/espiff_v3_1_annotated_correct_V30zvmZa8C.jpg"
        ]
      },
      {
        heading: "Reliability Engineering",
        body: "System architecture eliminates common failure points in unattended or industrial deployments.",
        bullets: [
          "Eliminates SD-card dependency",
          "External watchdog for supervision",
          "Supercapacitor-backed RTC for resilience",
          "Operation compatible with sealed and low-airflow enclosures",
          "Suitable for long-duration and remote deployments"
        ]
      },
      {
        heading: "Hardware Capabilities",
        numbered: [
          {
            title: "Connected Processing Core",
            body: "ESP32 integrates wireless connectivity, Ethernet, and memory resources for networked control and data processing."
          },
          {
            title: "RP2040 Co-Processor Layer",
            body: "Handles GPIO expansion, emulates Raspberry Pi header behavior, and enables USB host/device functionality for peripherals."
          },
          {
            title: "Memory & Expandability",
            body: "Onboard flash with external ISSI flash options up to 512 Mbit allows scalable storage for embedded applications."
          }
        ]
      },
      {
        heading: "Power & Deployment",
        bullets: [
          "USB-C input supporting up to 5V / 3A",
          "Direct 24V power input option",
          "Compatible with PoE HAT for network-powered deployment",
          "Supports power-hungry HAT modules"
        ]
      },
      {
        heading: "Mechanical & Integration",
        body: "Designed for seamless integration into the Raspberry Pi ecosystem while improving deployment robustness.",
        bullets: [
          "Compatible with Raspberry Pi 4 enclosures (metal, DIN rail, plastic)",
          "External antenna via uFL connector for shielded enclosures",
          "Suitable for industrial and waterproof installations",
          "Maintains Pi ecosystem compatibility with improved reliability"
        ]
      },
      {
        heading: "Software Ecosystem",
        bullets: [
          "Arduino IDE support for both ESP32 and RP2040",
          "Compatible with Espressif IDF and Pico SDK",
          "Supports MicroPython and JavaScript environments",
          "RTOS support including FreeRTOS and Apache NuttX"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Robust dual-MCU embedded platform offering deterministic operation, enclosure compatibility, and reliability for industrial and 24/7 applications. Demonstrates system-level design integrating hardware architecture, power management, and mechanical deployment considerations."
      }
    ]
  },
  {
    slug: "d3f8a1",
    title: "Battery-Powered Environmental Sensing Node",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "Battery-powered environmental monitoring node measuring temperature, humidity, pressure, and air quality with USB-C charging and extended autonomous operation.",
    longDescription: "Compact, low-power environmental monitoring node based on ESP32-C3 for continuous sensing in constrained environments. Integrates multiple environmental sensors to capture temperature, humidity, pressure, and air quality data while maintaining extended battery life. Dual power architecture supports both USB-C charging and autonomous battery operation, ensuring continuous reliability during power interruptions. Design emphasizes energy efficiency, low cost, and adaptability for home monitoring, agriculture, and remote deployments.",
    tags: [
      "ESP32-C3",
      "Environmental Monitoring",
      "IoT",
      "Low Power Design",
      "Battery Systems",
      "Sensor Integration",
      "Embedded Systems"
    ],
    icon: Activity,
    highlight: "Low-Power Sensing",
    media: [
      {
        type: "image",
        src: "/images/_KOoa1uyXuP.jpg"
      }
    ],
    hidden: false,
    deliverables: [
      "Custom ESP32-C3 Embedded Node",
      "Multi-Sensor Integration (BME280 + SPG40)",
      "Battery + USB-C Power System",
      "Low-Power Firmware Design",
      "Compact PCB Layout"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Compact environmental monitoring node designed for continuous operation in power-constrained environments. Collects multiple environmental parameters while maintaining reliable operation through an integrated battery-backed design.",
        images: [
          "/images/top_Hf5nqdZawZ.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "Sensing, processing, and power management integrated into a compact embedded platform optimized for long-term autonomous deployment.",
        bullets: [
          "ESP32-C3 for processing and connectivity",
          "Integrated environmental sensing for multiple parameters",
          "Compact PCB layout for space and efficiency",
          "Autonomous operation without external dependency"
        ],
        images: [
          "/images/top_eDCRyNSZDF.jpg",
          "/images/bottom_XEytMuRQuM.jpg"
        ]
      },
      {
        heading: "Power System Design",
        body: "Dual power architecture provides reliable operation in environments with unstable or intermittent power.",
        bullets: [
          "Rechargeable lithium battery for autonomous operation",
          "USB-C interface for power input and charging",
          "High-efficiency voltage regulator (~95%) for extended battery life",
          "Supports continuous operation during outages"
        ]
      },
      {
        heading: "Sensor Integration",
        body: "Multiple sensors integrated to provide comprehensive environmental insights across various conditions.",
        bullets: [
          "BME280 for temperature, humidity, and pressure monitoring",
          "SPG40 sensor for air quality and CO2 estimation",
          "Suitable for both indoor and outdoor deployment",
          "Applications include agriculture, home monitoring, and health"
        ]
      },
      {
        heading: "Low-Power Optimization",
        body: "Energy efficiency optimized to enable extended autonomous operation.",
        bullets: [
          "Optimized power consumption for long battery life",
          "Estimated runtime of 15–20 days on 500mAh battery",
          "Efficient regulator and system-level power management",
          "Continuous unattended operation"
        ],
        images: [
          "/images/bottom_AAX3d5pK0x.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Embedded system design combining low-power electronics, multi-sensor integration, and resilient power architecture. Provides a cost-effective, autonomous solution for environmental monitoring in IoT deployments."
      }
    ]
  },
  {
    slug: "b7f4d1",
    title: "Dual-Motor FPGA Control Platform",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-firmware"],
    description: "RTL-based FPGA system for precise dual DC motor control with encoder feedback and lead-follow PID synchronization.",
    longDescription: "Real-time motor control system implemented on FPGA using Verilog. Enables precise dual DC motor synchronization with encoder feedback. Integrates PWM generation, quadrature decoding, and custom lead-follow PID control. FPGA implementation provides deterministic timing, parallel processing, and low-latency control for robotics and embedded applications.",
    tags: [
      "FPGA",
      "Verilog",
      "RTL Design",
      "Robotics",
      "Motor Control",
      "PID Control",
      "Embedded Systems"
    ],
    icon: Cpu,
    highlight: "FPGA Motor Control",
    media: [
      {
        type: "image",
        src: "/images/_kVlac0BHjL.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "RTL Motor Control System",
      "FPGA-Based PID Controller",
      "Quadrature Encoder Decoder",
      "PWM Signal Generation",
      "Robotic Motion Control Architecture"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "FPGA-based dual motor control system providing synchronized operation through encoder feedback. Leverages hardware-level parallelism for deterministic timing and high-performance control.",
        images: [
          "/images/image_f1yG9kGWmq.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "Integration of multiple FPGA modules for real-time motor control and feedback processing.",
        bullets: [
          "PWM generation for motor speed control",
          "Encoder-based feedback system",
          "Dual motor synchronization logic",
          "RC input interface for control signals",
          "Real-time processing using FPGA parallelism"
        ],
        images: [
          "/images/image_jbejuB65tr.jpg",
        ]
      },
      {
        heading: "Motor Driver & Hardware Interface",
        body: "H-bridge motor driver controlled via FPGA-generated signals to drive dual DC motors efficiently.",
        images: [
          "/images/image_JqvbsDhzQo.jpg",
          "/images/image_xEmklyzqqW.jpg"
        ]
      },
      {
        heading: "Encoder Feedback System",
        body: "Quadrature decoding logic determines motor speed and direction from Hall-effect encoder signals.",
        bullets: [
          "Dual-channel encoder signal processing",
          "Direction detection via phase difference",
          "Velocity estimation using pulse frequency"
        ],
        images: [
          "/images/image_4NxKxJnSJY.jpg"
        ]
      },
      {
        heading: "Control Algorithm (PID)",
        body: "Custom lead-follow PID control algorithm synchronizes motor speeds by adjusting PWM duty cycles based on encoder feedback.",
        bullets: [
          "Real-time error computation between motors",
          "Velocity difference compensation",
          "Integral component for stability and damping",
          "Discrete-time control implemented in RTL"
        ],
        images: [
          "/images/image_GzkVBfZlVm.jpg"
        ]
      },
      {
        heading: "RTL Design & Implementation",
        body: "Modular Verilog design using state machines for sequential computation and clock domain management.",
        bullets: [
          "Modular RTL architecture",
          "State machine-based control logic",
          "Clock domain handling and timing control",
          "Simulation and verification using Vivado"
        ]
      },
      {
        heading: "System Validation",
        body: "Validated via simulation models and real hardware testing. Parameters were refined to achieve stable, synchronized motor motion."
      },
      {
        heading: "Robotic System Integration",
        body: "FPGA motor controller integrated into a mobile robot platform including power distribution, chassis, and mechanical assembly.",
        images: [
          "/images/image_VxMtP0w2lN.jpg",
          "/images/image_6Yu4senJgF.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates FPGA-based motor control system design combining RTL implementation, real-time signal processing, and robotics integration. Provides deterministic dual-motor synchronization with encoder feedback for embedded robotics applications."
      }
    ]
  },
  {
    slug: "f7d2e9",
    title: "Edge-Connected Machine Health Monitoring System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "embedded-ai"],
    description: "Battery-powered vibration monitoring system with edge signal processing, mesh networking, and cloud-based analytics.",
    longDescription: "Developed a distributed machine monitoring system that captures vibration data and performs edge-level signal processing before transmitting insights through a resilient mesh network to cloud analytics platforms. The architecture combines embedded DSP, low-power wireless communication, and scalable IoT infrastructure to enable predictive maintenance across industrial environments. Designed for reliability and extensibility, the system supports real-time anomaly detection, efficient data encoding, and seamless integration with cloud-based monitoring services.",

    tags: [
      "Industrial IoT",
      "Vibration Analysis",
      "Embedded DSP",
      "Mesh Networking",
      "Edge Computing",
      "Predictive Maintenance",
      "Wireless Systems"
    ],

    icon: Activity,
    highlight: "Machine Health Monitoring",

    hidden: false,

    media: [
      {
        type: "image",
        src: "/images/_fnR2fiEd8N.jpg"
      }
    ],

    deliverables: [
      "Battery-powered vibration monitoring node",
      "Embedded FFT-based signal processing",
      "Mesh networking communication system",
      "Cloud integration pipeline",
      "Scalable IoT monitoring architecture"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Designed a connected machine monitoring platform that captures vibration signals and processes them locally to detect early signs of failure. The system enables predictive maintenance by combining embedded processing, wireless networking, and cloud analytics."
      },

      {
        heading: "System Architecture",
        body: "The platform integrates sensing, processing, networking, and cloud connectivity into a unified architecture.",
        bullets: [
          "Embedded microcontroller with dual-core processing",
          "3-axis accelerometer for vibration acquisition",
          "Edge signal processing using DSP libraries",
          "Mesh-based wireless communication network",
          "Cloud integration for analytics and visualization"
        ],
        images: [
          "/images/nrf5340-dk-v_2_0_0_prod_page_qYcHTpNrc4.bmp",
          "/images/nrf52840-dongle-rev2-prod_page_0iLFH13ee0.bmp"
        ]
      },

      {
        heading: "Signal Acquisition & Processing",
        body: "Vibration data is continuously sampled and processed locally to extract meaningful frequency-domain features.",
        bullets: [
          "Interrupt-based vibration event detection",
          "Time-series sampling with fixed intervals",
          "Vector magnitude calculation from 3-axis data",
          "FFT-based frequency analysis using hardware acceleration",
          "Spectrogram generation for condition monitoring"
        ],
      },

      {
        heading: "Data Communication",
        body: "Efficient data transport is achieved through compact encoding and low-power wireless protocols.",
        bullets: [
          "CBOR-based compact data encoding",
          "CoAP protocol for lightweight communication",
          "Mesh networking using Thread architecture",
          "Gateway integration via border router",
          "Seamless bridging to IP-based networks"
        ]
      },

      {
        heading: "Mesh Networking Architecture",
        body: "A self-healing mesh network enables scalable deployment across industrial environments.",
        bullets: [
          "Distributed sensor nodes for data collection",
          "Dynamic routing within mesh topology",
          "Gateway node for cloud connectivity",
          "High reliability in large-scale deployments"
        ],
        images: [
          "/images/iot_mesh_overview_TxOplYpsql.jpg"
        ]
      },

      {
        heading: "Vibration Analysis Results",
        body: "Frequency-domain analysis reveals distinct vibration patterns used for machine condition monitoring.",
        images: [
          "/images/image_lj72wsgTga.jpg"
        ]
      },

      {
        heading: "Hardware Design Direction",
        body: "The system is designed for transition from development kits to a compact, production-ready embedded device.",
        bullets: [
          "Integration into custom multi-layer PCB",
          "Battery-powered operation with optimized consumption",
          "Environmental protection via sealed enclosure",
          "Mechanical design for industrial deployment"
        ],
        images: [
          "/images/image_hdJFmtveXG.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates advanced expertise in embedded systems, signal processing, and IoT architecture. It highlights the ability to design scalable, low-power monitoring systems that combine edge computation, wireless networking, and cloud analytics for real-world industrial applications."
      }
    ]
  },
  {
    slug: "tether_browsing_display",
    title: "Advanced Bridge Health Monitoring System",
    category: "IoT & Embedded AI",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "ai-embedded-systems"],
    description: "AI-enabled bridge monitoring system that tracks real-time vibrations, temperature, and environmental factors to predict structural health and forecast risks.",
    longDescription: "This project demonstrates a professional structural health monitoring platform for bridges. It combines edge sensor nodes with AI-based degradation analysis to continuously track vibrations, temperature, humidity, and other environmental factors. The system predicts potential structural risks in real time, provides anomaly detection, and visualizes data via a comprehensive web dashboard, enabling actionable insights for civil engineering and maintenance teams.",
    tags: ["Structural Health Monitoring", "IoT", "AI", "Embedded Systems", "Vibration Analysis", "Edge Computing", "Predictive Maintenance"],
    icon: Cpu,
    highlight: "AI-Driven Structural Monitoring",
    media: [
      { type: "image", src: "/images/espressif_esp32c6_devkitc_1.jpg" }
    ],
    hidden: false,
    deliverables: [
      "Bridge-mounted sensor nodes with vibration and environmental sensing",
      "Edge AI algorithms for degradation scoring and anomaly detection",
      "Realtime forecasting of structural health",
      "Web dashboard with 3D digital twin visualization",
      "Integrated alerting system based on predicted structural risks"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed a bridge health monitoring system that continuously captures vibration, motion, temperature, and humidity data. Edge AI models compute degradation scores, classify structural health, detect anomalies, and forecast risk trends in real time."
      },
      {
        heading: "Sensor Node Architecture",
        body: "Each node acquires multi-axis acceleration and environmental parameters, preprocesses data locally, and transmits summarized features to the cloud for further analysis.",
        images: [
          "/images/MPU6050.jpg",
          "/images/Dht11_he1.jpg",
          "/images/image_ICeXM7zDcq.jpg",
          "/images/WhatsApp_Image_2025-11-30_at_91313_PM.jpg",
        ]
      },
      {
        heading: "Sensor Hardware Details",
        body: "ESP32-C6 serves as the central hub with Wi-Fi 6 and BLE 5.0, collecting vibration data from MPU6050 and environmental readings from DHT11. Nodes provide local LED status and transmit structured JSON data for AI processing."
      },
      {
        heading: "Embedded Firmware",
        body: "The firmware reads sensors, computes derived features (lags, rolling stats, thermal index, corrosion risk), formats JSON payloads, and transmits over Wi-Fi at 300ms intervals. Built-in RGB LED indicates operational status and risk classification."
      },
      {
        heading: "Edge AI & ML",
        body: "Degradation and 30-day forecast models are implemented using LightGBM regression. Anomaly detection leverages z-scores on vibration magnitudes. Final condition classification combines degradation, forecast, anomaly, and corrosion risk into actionable bridge health states."
      },
      {
        heading: "Cloud API & Data Handling",
        body: "Python Flask API receives node JSON data, applies ML inference, computes anomaly scores, and returns structured condition outputs. API endpoints support `/sensor`, `/latest`, and `/stats` queries for real-time monitoring."
      },
      {
        heading: "Dashboard Visualization",
        body: "Web dashboard built with Three.js, Chart.js, HTML, and CSS. Displays a 3D digital twin, risk-colored bridge segments, gauges for thermal and corrosion indices, trend charts for degradation and forecast, and real-time vibration waveforms.",
        images: [
          "/images/Screenshot__205_.jpg",
          "/images/schematic_11302025230909_VP33ArxWyp.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "This system provides continuous structural health insights, early detection of degradation, anomaly monitoring, and real-time forecasting for bridges. It demonstrates professional expertise in edge AI, embedded systems, IoT sensor integration, and web visualization for civil infrastructure."
      }
    ]
  },
  {
    slug: "e7c2b1", // new unique hex slug
    title: "Edge-Based Machine Condition Intelligence System",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "ai-embedded-systems"],
    description: "Low-power embedded system performing real-time vibration analysis and on-device fault classification for predictive maintenance.",
    longDescription: "This project demonstrates an embedded condition monitoring system designed for predictive maintenance of industrial machinery. It combines a high-precision accelerometer with a microcontroller platform capable of running machine learning inference directly at the edge. The system captures vibration data, processes it locally, and classifies machine states in real time, reducing dependency on cloud processing while improving response time and efficiency.",
    tags: ["Predictive Maintenance", "Edge AI", "Embedded Systems", "Vibration Analysis", "TinyML", "IoT"],
    icon: Cpu,
    highlight: "Edge AI Condition Monitoring",
    hidden: false,
    media: [
      {
        type: "image",
        src: "/images/wizfi360-evb-pico_LrXNS0OKzt.jpg"
      }
    ],
    deliverables: [
      "Embedded vibration-based condition monitoring system",
      "Real-time machine state classification at the edge",
      "Integrated accelerometer data acquisition pipeline",
      "On-device TinyML inference engine",
      "Cloud connectivity for remote monitoring"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed an embedded predictive maintenance system that continuously monitors machine vibration and classifies operating conditions in real time. The solution eliminates the need for continuous cloud transmission by performing inference locally on a low-power microcontroller. :contentReference[oaicite:0]{index=0}"
      },
      {
        heading: "Hardware Architecture",
        body: "The system integrates a high-resolution accelerometer with a microcontroller-based IoT platform to capture and process vibration signals.",
        images: [
          "/images/device_xhM7ot3oRr.JPG"
        ]
      },
      {
        heading: "Data Acquisition",
        body: "Vibration data is collected across X, Y, and Z axes using a precision accelerometer with a sampling frequency of approximately 85 Hz. Multiple operating scenarios were recorded including normal operation, airflow anomalies, and shutdown conditions to build a comprehensive dataset for model training. :contentReference[oaicite:1]{index=1}",
      },
      {
        heading: "Machine Learning Pipeline",
        body: "A lightweight machine learning model was trained using spectral features derived from vibration signals. FFT-based preprocessing was applied to extract meaningful frequency-domain characteristics, enabling accurate classification of machine states.",
        images: [
          "/images/image_IiqV6Ji2zM.jpg",
          "/images/image_sjbfHD170u.jpg",
          "/images/image_oygGNr630O.jpg"
        ]
      },
      {
        heading: "Embedded Inference",
        body: "The trained model was deployed on the microcontroller using an optimized inference library. Real-time classification is performed on streaming sensor data with minimal latency, enabling immediate detection of abnormal operating conditions.",
      },
      {
        heading: "System Operation",
        body: "The device continuously samples vibration data, processes it into feature vectors, and classifies machine states such as normal operation, airflow anomalies, and shutdown conditions. This allows early fault detection without requiring continuous cloud communication."
      },
      {
        heading: "Cloud Integration",
        body: "Processed results can be transmitted to a cloud platform for remote monitoring and visualization. This hybrid architecture balances local intelligence with centralized analytics for scalability."
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates advanced capabilities in embedded AI, real-time signal processing, and low-power IoT system design. It highlights expertise in deploying machine learning models on constrained hardware for predictive maintenance applications."
      }
    ]
  },
  {
    slug: "e2b7c9",
    title: "High-Throughput RTL Error Correction Engine",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-firmware"],
    description: "RTL-based high-throughput error correction system with continuous data processing, formal verification, and real-time FPGA deployment.",
    longDescription: "High-throughput error correction engine implemented in RTL, capable of producing one valid output per clock cycle. The architecture uses time-division multiplexing across multiple decoding units to sustain continuous data flow. Serial data interface enables high-speed communication, and a valid-ready protocol ensures synchronization between encoder and decoder. Formal verification using model checking guarantees correctness under all input conditions, including error injection scenarios.",
    tags: [
      "FPGA",
      "RTL Design",
      "Verilog",
      "Digital Design",
      "Formal Verification",
      "Error Correction",
      "High Throughput Systems"
    ],
    icon: Cpu,
    highlight: "Error Correction RTL",
    media: [
      {
        type: "image",
        src: "/images/_LA3kmP6sBI.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "RTL Encoder & Decoder Design",
      "High-Throughput Data Pipeline",
      "Formal Verification Model",
      "FPGA Implementation",
      "Error Injection & Validation Framework"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "High-performance error correction system designed to process continuous input data streams with minimal latency, detecting and correcting transmission errors in real time."
      },
      {
        heading: "System Architecture",
        body: "System includes a serial encoder, high-throughput decoder, and a configurable channel model for validation.",
        bullets: [
          "Bit-serial data transmission for high-speed operation",
          "Valid-ready handshake protocol for synchronization",
          "Continuous pipeline processing with output per clock cycle",
          "Time-division multiplexing for throughput optimization"
        ]
      },
      {
        heading: "Encoder Design",
        body: "Converts parallel input data into serialized format while generating parity information for error detection.",
        bullets: [
          "Parallel-in serial-out architecture",
          "Finite state machine for data and parity generation",
          "Syndrome computation during message processing",
          "Optimized for continuous data streaming"
        ]
      },
      {
        heading: "Decoder Architecture",
        body: "Reconstructs original data and corrects errors using syndrome analysis and feedback logic.",
        bullets: [
          "Linear feedback shift register for syndrome generation",
          "Error position detection via combinational logic",
          "Parallel output reconstruction using buffer registers",
          "Dual-decoder time multiplexing for maximum throughput"
        ]
      },
      {
        heading: "Channel Modeling",
        body: "Configurable channel model simulates transmission errors for validation and testing.",
        bullets: [
          "Single and double bit error injection",
          "Configurable error rate control",
          "Applicable for simulation and hardware testing"
        ]
      },
      {
        heading: "Formal Verification",
        body: "System formally verified using model checking to ensure correctness across all input scenarios.",
        bullets: [
          "Assertions validating error correction behavior",
          "Proof of single-bit error correction",
          "Detection of multi-bit error conditions",
          "Latency guarantees for encoder and decoder",
          "Liveness verification to prevent deadlock"
        ]
      },
      {
        heading: "FPGA Implementation",
        body: "Synthesized and deployed on FPGA hardware for real-time validation and performance assessment.",
        bullets: [
          "RTL implementation using Verilog",
          "Simulation and synthesis using Vivado",
          "Hardware validation on FPGA board",
          "End-to-end system verification with real signals"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "High-throughput RTL error correction engine demonstrating reliable, low-latency data processing with formal verification. System design ensures deterministic performance and correctness for communication and safety-critical applications."
      }
    ]
  },
  {
    slug: "p4d8f1",
    title: "Compact Offline Flyback Converter for Auxiliary DC Rails",
    category: "Power Electronics",
    filterSlugs: ["power-electronics", "pcb-hardware", "embedded-firmware"],
    description: "Mains-powered isolated SMPS converting 220VAC to adjustable 8VDC at 24W using compact flyback topology and custom transformer design.",
    longDescription: "Designed a compact offline flyback power supply for converting 220VAC mains input into a regulated low-voltage DC rail suitable for embedded systems, control electronics, and post-regulation stages. The converter delivers up to 24W output power with isolated topology, integrated PWM controller, custom magnetics, feedback regulation, EMI filtering, and compact PCB implementation. The design emphasizes reliability, efficiency, transient response, and manufacturable layout for commercial electronic products.",

    tags: [
      "Flyback Converter",
      "SMPS",
      "AC-DC",
      "Power Electronics",
      "Offline Power Supply",
      "Transformer Design",
      "PCB Design",
      "EMI"
    ],

    icon: Zap,
    highlight: "24W Offline SMPS",

    hidden: false,

    media: [
      {
        type: "image",
        src: "/images/_8y0WrFgjvr.jpg"
      }
    ],

    deliverables: [
      "220VAC to 8VDC isolated flyback converter",
      "24W output power architecture",
      "Custom transformer + magnetics selection",
      "EMI input protection stage",
      "Production-ready PCB layout",
      "Bench validation and load testing"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a compact isolated AC-DC switching power supply converting 220VAC mains input into a stable low-voltage DC output. The platform was intended for electronics requiring reliable auxiliary power with efficient conversion and compact footprint."
      },

      {
        heading: "Electrical Specifications",
        bullets: [
          "Input: 220VAC mains",
          "Output: adjustable 7.5V to 8VDC",
          "Maximum load current: 3A",
          "Maximum output power: 24W",
          "Isolated flyback topology"
        ]
      },

      {
        heading: "Power Topology",
        body: "A flyback switching architecture was selected to provide galvanic isolation, low component count, and strong suitability for sub-30W offline converters.",
        bullets: [
          "Primary-side switching controller",
          "Integrated startup architecture",
          "No auxiliary winding required",
          "Opto-isolated output regulation",
          "Compact transformer implementation"
        ]
      },

      {
        heading: "Magnetics Design",
        body: "The converter uses a compact RM8 ferrite transformer core selected for efficient energy transfer and reduced board area.",
        bullets: [
          "RM8 ferrite core geometry",
          "Custom primary / secondary turns ratio",
          "Isolation barrier compliance",
          "Optimized leakage and thermal behavior"
        ]
      },

      {
        heading: "Protection & Filtering",
        body: "Input and output stages were designed for stable operation and robustness under real mains environments.",
        bullets: [
          "AC input rectification stage",
          "Surge / transient suppression",
          "EMI filtering network",
          "Output ripple suppression capacitors",
          "Feedback loop compensation"
        ]
      },

      {
        heading: "PCB Implementation",
        body: "The PCB layout was optimized for creepage clearance, switching current loops, thermal paths, and manufacturability.",
        bullets: [
          "Primary / secondary isolation spacing",
          "Short high-current switching loops",
          "Thermal copper around power devices",
          "Compact single-board implementation"
        ],
      },

      {
        heading: "Validation Testing",
        body: "Bench testing covered regulation accuracy, voltage droop, load response, and output noise under dynamic loading.",
        bullets: [
          "Voltage regulation verification",
          "3A current delivery testing",
          "Transient load-step response",
          "Ripple / noise measurement",
          "Thermal observation under load"
        ]
      },

      {
        heading: "Custom parts and enclosures",
        images: [
          "/images/fig-4_9II1MUs1AL.jpg"
        ]
      },

      {
        heading: "Schematics",
        images: [
          "/images/fig-1_Bew6tqBZsE.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates strong capability in offline power conversion, flyback topology selection, transformer-based SMPS design, EMI-aware PCB layout, and production-oriented validation. It highlights experience directly aligned with commercial AC-DC converter development."
      }
    ]
  },
  {
    slug: "n5e7c3",
    title: "Universal Input Isolated 5V Converter Module",
    category: "Power Electronics",
    filterSlugs: ["power-electronics", "pcb-hardware", "embedded-firmware"],
    description: "Wide-range mains AC to regulated 5VDC flyback converter delivering up to 2.5A with isolated topology and low-noise output performance.",
    longDescription: "Designed a compact universal-input AC-DC switching power module converting 85VAC to 260VAC mains input into a tightly regulated 5VDC output rail. The converter uses isolated flyback topology, integrated PWM control, custom transformer magnetics, precision feedback regulation, and compact PCB implementation. The platform is suitable for powering embedded controllers, IoT products, communication devices, and downstream point-of-load regulators requiring robust operation across global mains ranges.",

    tags: [
      "AC-DC",
      "Flyback Converter",
      "Universal Input",
      "5V Power Supply",
      "SMPS",
      "Power Electronics",
      "Transformer Design",
      "PCB Design"
    ],

    icon: Zap,
    highlight: "Universal 5V SMPS",

    hidden: false,

    media: [
      {
        type: "image",
        src: "/images/_beVxXqooI0.jpg"
      }
    ],

    deliverables: [
      "85VAC–260VAC isolated flyback converter",
      "Regulated 5VDC output up to 2.5A peak",
      "Custom EE20 transformer design",
      "Low ripple output stage",
      "Compact production PCB layout",
      "Bench-tested electrical validation"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a universal-input isolated switching power supply for generating a stable 5V rail directly from global mains sources. The design targets compact electronics requiring dependable low-voltage power under varying line conditions."
      },

      {
        heading: "Electrical Specifications",
        bullets: [
          "Input range: 85VAC to 260VAC",
          "Output voltage: 5VDC adjustable",
          "Peak output current: 2.5A",
          "Continuous output current: 2A",
          "Maximum output power: ~12W"
        ]
      },

      {
        heading: "Power Topology",
        body: "An isolated flyback architecture was selected for efficiency, low BOM count, and suitability for low-to-mid power offline applications.",
        bullets: [
          "Primary-side switching controller",
          "Integrated startup capability",
          "No auxiliary winding required",
          "Opto-coupled closed-loop regulation",
          "Wide mains operating support"
        ]
      },

      {
        heading: "Magnetics Design",
        body: "The converter uses an EE20 ferrite transformer optimized for isolation, compact size, and stable power transfer across wide input conditions.",
        bullets: [
          "EE20 ferrite core platform",
          "Custom turns ratio design",
          "Primary / secondary isolation barrier",
          "Thermal and efficiency optimization"
        ]
      },

      {
        heading: "Output Performance",
        body: "The supply was tuned for strong voltage regulation and low-noise output suitable for digital electronics.",
        bullets: [
          "No-load ripple: ~1.5mVrms / 4mVp-p",
          "Full-load ripple (2A): ~3mVrms / 25mVp-p",
          "Voltage drop at 2A load: ~50mV",
          "Stable regulation under load transitions"
        ]
      },

      {
        heading: "PCB Implementation",
        body: "PCB layout emphasized safety spacing, minimized switching loops, thermal distribution, and compact mechanical form factor.",
        bullets: [
          "Primary / secondary creepage clearance",
          "Short current return paths",
          "Low-noise feedback routing",
          "Manufacturable compact footprint"
        ],
        images: [
          "/images/fig-4_WizALat6gr.jpg",
          "/images/fig-12_WxKjdeRm0S.jpg"
        ]
      },

      {
        heading: "Validation Testing",
        body: "Bench characterization verified current delivery, voltage sag, and ripple performance using programmable load and oscilloscope instrumentation."
      },

      {
        heading: "Schematics",
        images: [
          "/images/fig-1_DRSPxXWDro.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates strong expertise in offline SMPS development, universal-input flyback converter design, transformer selection, low-noise power regulation, and manufacturable PCB implementation. It directly reflects practical capability for commercial AC-DC power supply design."
      }
    ]
  },
  {
    slug: "b7e4d2",
    title: "Distributed Climate Control Platform with Wireless Sensor Nodes",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "hardware-design"],
    description: "Smart HVAC control system using ESP32 wireless nodes, environmental sensing, relay switching, and Android-based user interface.",
    longDescription: "Designed a distributed thermostat platform for residential heating control using ESP32 microcontrollers, wireless sensor nodes, relay actuation, and an Android control interface. The system gathers temperature and humidity data from multiple rooms, applies configurable heating logic, and remotely controls a boiler or HVAC source. The architecture focuses on low-cost deployment, multi-room sensing, remote access, and scalable home automation integration.",

    tags: [
      "ESP32",
      "Smart Thermostat",
      "IoT",
      "HVAC",
      "Home Automation",
      "Wireless Sensors",
      "Android",
      "Relay Control"
    ],

    icon: Home,
    highlight: "Wireless HVAC Control",

    hidden: false,

    media: [
      {
        type: "image",
        src: "/images/home-page-1-1024x488_SOmZrM4g2w.jpg"
      }
    ],

    deliverables: [
      "Distributed thermostat architecture",
      "ESP32 room sensing nodes",
      "Relay-based boiler control",
      "Android monitoring and control app",
      "Remote client access system",
      "Multi-room temperature management"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a wireless thermostat ecosystem that uses ESP32 sensor nodes and relay controllers to manage residential heating systems. The platform enables multi-room sensing, centralized decision logic, and remote user access through Android devices. :contentReference[oaicite:0]{index=0}"
      },

      {
        heading: "System Architecture",
        body: "The system separates environmental sensing, control logic, and actuation into distributed nodes for flexible deployment.",
        bullets: [
          "ESP32 temperature / humidity sensor nodes",
          "Dedicated relay controller node",
          "Central thermostat interface",
          "Wireless communication between nodes",
          "Remote client access support"
        ],
        images: [
          "/images/smart_pi_thermostat_architecture_(2)_Ob9VPg4vlz.jpg"
        ]
      },

      {
        heading: "Environmental Monitoring",
        body: "Multiple rooms can be monitored simultaneously using wireless sensor modules, enabling smarter heating decisions based on real occupancy zones and temperature distribution.",
        images: [
          "/images/esp32__dht11_p4d8yWle4E.jpg",
          "/images/esp32__dht11_bb_5oLN0amQX3.jpg"
        ]
      },

      {
        heading: "HVAC Actuation Layer",
        body: "A relay-equipped ESP32 node interfaces with the boiler or heating equipment, allowing isolated on/off control based on thermostat logic.",
        images: [
          "/images/esp32__high_level_relay_GnIXC9ubO1.jpg",
          "/images/esp32__relay_bb_v2VGS0jzJb.jpg"
        ]
      },

      {
        heading: "Combined Node Configuration",
        body: "For compact deployments, sensing and relay functions can be combined on a single ESP32 platform, reducing hardware count while preserving functionality.",
        images: [
          "/images/esp32_relay_and_dht_sensor_l95bwQ49Nz.jpg"
        ]
      },

      {
        heading: "User Interface & Remote Access",
        body: "Android devices serve as thermostat controllers and monitoring terminals. Additional client devices can connect remotely for off-site heating control and status visibility.",
        images: [
          "/images/device-2018-01-06-180237_dM4RLBXjN3.jpg",
        ]
      },

      {
        heading: "Control Logic",
        body: "The software determines heating demand using configurable thresholds, temperature feedback, and humidity context. This enables automated operation without constant user interaction."
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates full-stack IoT product capability across embedded firmware, wireless networking, sensor integration, mobile interfaces, and HVAC hardware control. It highlights experience building scalable real-world automation systems using low-cost embedded platforms."
      }
    ]
  },
  {
    slug: "c2f6a8",
    title: "Heterogeneous Accelerator AI Deployment",
    category: "Embedded Linux & BSP",
    filterSlugs: ["embedded-linux-bsp", "iot-connected-devices"],
    description: "Edge AI inference pipeline ported from Jetson Nano to TI TDA4VM using hardware accelerators for reduced latency and efficient edge deployment.",
    longDescription: "Edge machine vision inference workflow migrated from NVIDIA Jetson Nano to Texas Instruments SK-TDA4VM platform, focusing on hardware-aware optimization for embedded AI. Original TensorFlow Lite SSD MobileNet model executed on Jetson Nano CPU, while TDA4VM leveraged dedicated deep learning accelerators through TI’s TIDL toolchain. Workflow included model artifact adaptation, environment setup, optimized compilation, deployment, and integration into runtime. Resulting system achieved significant latency reduction through accelerator-aware execution.",
    tags: [
      "Edge AI",
      "TensorFlow Lite",
      "TDA4VM",
      "Jetson Nano",
      "Embedded Linux",
      "Model Optimization",
      "TIDL"
    ],
    icon: Cpu,
    highlight: "Accelerator-Aware AI",
    media: [
      {
        type: "image",
        src: "/images/_unlI3boDdj.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "Cross-Platform AI Porting Workflow",
      "TIDL Compilation Setup",
      "Optimized Inference Deployment",
      "Latency Benchmarking",
      "TDA4VM Integration"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Edge AI workflow migrated from Jetson Nano to TI SK-TDA4VM to evaluate adaptation of CPU-bound inference to heterogeneous accelerator-based hardware. Preserves original model flow while optimizing execution for dedicated accelerators."
      },
      {
        heading: "Source Platform",
        body: "Jetson Nano-based TensorFlow Lite inference workflow performing SSD MobileNet V1 object detection on resized COCO images using CPU execution.",
        bullets: [
          "Jetson Nano development kit used as baseline platform",
          "Python 3.6 workflow on JetPack 4.5",
          "Model: SSD MobileNet V1 (TensorFlow Lite)",
          "Input set: 20 resized COCO17 images",
          "Average inference latency: 223 ms per image"
        ],
        images: [
          "/images/dsc_7551_WZqr6P6Slb.jpg"
        ]
      },
      {
        heading: "Target Platform",
        body: "TI SK-TDA4VM platform with dedicated deep learning, vision, and multimedia accelerators, providing a heterogeneous execution environment.",
        bullets: [
          "Dual-core Arm Cortex-A72 CPU",
          "Dedicated DSP and deep learning accelerators",
          "4 GB LPDDR4 memory",
          "Expanded I/O and PCIe support"
        ],
        images: [
          "/images/dsc_8678006_kEPDnhO7T0.jpg"
        ]
      },
      {
        heading: "Optimization Workflow",
        numbered: [
          {
            title: "Compilation Environment",
            body: "TI edgeai-tidl-tools environment configured under Ubuntu/WSL2 for model compilation."
          },
          {
            title: "Model Conversion",
            body: "TensorFlow Lite model converted to TIDL-compatible artifacts for accelerator execution."
          },
          {
            title: "Deployment",
            body: "Compiled artifacts transferred to target board and integrated into runtime pipeline."
          }
        ]
      },
      {
        heading: "Performance Results",
        body: "Hardware-aware migration yields substantial reduction in inference latency.",
        bullets: [
          "Jetson Nano: 223 ms per inference",
          "TDA4VM: 9 ms per inference",
          "Speedup: ~24×"
        ],
        images: [
          "/images/image_jtAmQ78BXZ.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Validates cross-platform AI deployment and demonstrates the impact of aligning model execution with hardware accelerators for real-world edge inference performance."
      }
    ]
  },
  {
    slug: "f6b2e9",
    title: "Adaptive Solar Energy Harvesting Module",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "power-electronics"],
    description: "Solar-powered battery charging system with MPPT energy harvesting and Li-ion charging control optimized for efficiency and reliability.",
    longDescription: "Compact solar-powered battery charging module using adaptive power tracking techniques. Optimizes energy extraction from solar panels by dynamically adjusting operating conditions to maximize power transfer. Integrates constant-current/constant-voltage Li-ion charging, thermal regulation, and multiple protection mechanisms in a compact PCB form factor. Supports standalone operation with focus on efficiency, reliability, and compatibility with portable energy systems.",
    tags: [
      "Power Electronics",
      "MPPT",
      "Battery Charging",
      "Solar Energy",
      "PCB Design",
      "Embedded Systems",
      "Energy Systems"
    ],
    icon: Sun,
    highlight: "Solar Battery Charging",
    media: [
      {
        type: "image",
        src: "/images/mini_img_1847_h29U195Xfd.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "MPPT-Based Charging Module",
      "Li-ion Charging Circuit Design",
      "Protection & Safety Integration",
      "Custom PCB Layout",
      "Standalone Power System Design"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Solar-powered battery charging module designed for efficient energy harvesting from variable input sources and safe Li-ion battery charging. Optimized for standalone operation in portable and off-grid applications."
      },
      {
        heading: "Core Design Concept",
        body: "Adaptive power tracking maximizes energy extraction from solar panels while ensuring safe charging conditions for the battery.",
        bullets: [
          "Dynamic power tracking for solar input optimization",
          "Standalone operation without microcontroller",
          "Compact form factor for portable applications",
          "High efficiency under varying light conditions"
        ]
      },
      {
        heading: "Charging System Architecture",
        body: "Implements complete Li-ion charging cycle with protection and efficiency optimization.",
        bullets: [
          "Constant-current / constant-voltage charging",
          "Automatic recharge and termination logic",
          "Undervoltage lockout and safety mechanisms",
          "Thermal regulation during high load conditions"
        ],
        images: [
          "/images/screenshot_2025_03_03-2_LMhn1dDmBu.jpg"
        ]
      },
      {
        heading: "Hardware Design",
        numbered: [
          {
            title: "Energy Conversion Stage",
            body: "Adaptive charging control using integrated controller with built-in power MOSFET, eliminating the need for external current sensing.",
            image: "/images/mini_img_1847_h29U195Xfd.jpg"
          },
          {
            title: "Protection Circuitry",
            body: "Input surge protection, polarity protection, and battery safety mechanisms ensure reliable operation.",
            image: "/images/screenshot_2025_02_28-6_iBUpGwL0BM.jpg"
          },
          {
            title: "Input Interface",
            body: "Supports solar input and USB-C interface for flexible power sourcing."
          }
        ]
      },
      {
        heading: "PCB Design",
        body: "Layout optimized for current handling, thermal management, and signal integrity.",
        bullets: [
          "Optimized trace width for high current flow",
          "Thermal-aware component placement",
          "Compact layout for common charger form factors",
          "Noise minimization through layout segmentation"
        ],
        images: [
          "/images/screenshot_2025_02_28-9_epByvg4gni.jpg"
        ]
      },
      {
        heading: "Assembly & Integration",
        body: "Module assembled using standard PCB techniques with careful component placement for reliability.",
        images: [
          "/images/mini_2020_0102_004534_002_TpUUFMIr3U.jpg"
        ]
      },
      {
        heading: "Testing & Validation",
        body: "Validated under both solar and direct input conditions for efficiency and safety.",
        bullets: [
          "Battery charging validation under controlled conditions",
          "Thermal performance testing",
          "Efficiency evaluation (~94% peak)",
          "Protection feature verification"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates advanced power electronics design for energy harvesting and battery charging, integrating protection mechanisms and standalone power functionality suitable for portable and renewable energy applications."
      }
    ]
  },
  {
    slug: "b7e4c2",
    title: "Hall-Effect Drive Control Interface for Electric Mobility Systems",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "pcb-hardware", "sensor-systems"],
    description: "Contactless throttle control platform using Hall-effect position sensing for electric bikes and mobility systems with embedded signal conditioning and controller interface.",
    longDescription: "Designed a compact throttle control platform for electric mobility applications using Hall-effect sensing technology to replace traditional potentiometer-based throttles. The system measures lever or grip position through magnetic field detection and generates a stable throttle command compatible with common motor controllers. Developed for e-bikes, light EV platforms, and retrofit propulsion systems requiring higher reliability, smoother response, and wear-free operation.",

    tags: [
      "Hall Effect Sensor",
      "Throttle Control",
      "Electric Vehicle",
      "E-Bike",
      "Embedded Systems",
      "Signal Conditioning",
      "Motor Control",
      "Sensor Interface"
    ],

    icon: Gauge,
    highlight: "Hall Sensor Throttle",

    hidden: true,

    media: [
      {
        type: "image",
        src: "/images/_nWUQpiRrQU.jpg"
      }
    ],

    deliverables: [
      "Hall-effect throttle sensing module",
      "Embedded signal processing firmware",
      "Analog/PWM controller output stage",
      "Compact sensor PCB design",
      "EV controller retrofit integration"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed a contactless throttle control solution using Hall-effect sensing for electric propulsion systems. The platform was created as a more reliable alternative to potentiometer throttles, eliminating mechanical wear while improving control smoothness and long-term durability."
      },

      {
        heading: "Sensor Architecture",
        body: "Throttle position is measured using a magnet-and-sensor arrangement integrated into a moving lever or grip mechanism.",
        bullets: [
          "Linear Hall-effect position sensing",
          "Magnet displacement tracking",
          "No-contact operation",
          "Long service life",
          "Stable output over repeated cycles"
        ]
      },

      {
        heading: "Embedded Electronics",
        body: "The embedded controller reads sensor output, applies filtering and calibration, then generates a throttle signal compatible with standard motor drivers.",
        bullets: [
          "ADC sensor acquisition",
          "Output linearization",
          "Noise filtering",
          "PWM or analog signal generation",
          "Low-latency response"
        ]
      },

      {
        heading: "Mechanical Integration",
        body: "The sensor layout was optimized for compact installation inside throttle lever assemblies and handlebar controls.",
        bullets: [
          "Compact PCB form factor",
          "Magnet alignment tolerance study",
          "Lever travel mapping",
          "Vibration-resistant mounting"
        ]
      },

      {
        heading: "Target Applications",
        body: "Suitable for mobility and control systems requiring robust throttle sensing.",
        bullets: [
          "Electric bicycles",
          "Scooters",
          "Marine electric propulsion",
          "Light EV conversions",
          "Custom industrial control levers"
        ]
      },

      {
        heading: "Schematics",
        body: "Control electronics include an ESP8266 module, PWM filtering stage, transistor-assisted output interface, and power conditioning components for integration with existing throttle wiring.",
        images: [
          "/images/screenshot_20191203_174722_Zfug4VFR2L.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates practical experience in Hall-effect sensing, embedded control electronics, signal conditioning, and electromechanical product integration for throttle applications."
      }
    ]
  },
  {
    slug: "a4d9e2",
    title: "Discrete Component Solar Charging & Voltage Regulation",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "power-electronics"],
    description: "Analog solar charging circuit with adjustable output voltage and linear regulation for battery charging applications.",
    longDescription: "Low-dropout analog solar charging circuit using discrete components for battery charging from variable solar input. Utilizes a P-channel MOSFET linear regulator combined with a differential amplifier to maintain stable output voltage. Adjustable potentiometer allows fine-tuning of charging voltage for different battery types. Design emphasizes simplicity, reliability, and efficiency without reliance on microcontrollers or complex control logic.",
    tags: [
      "Power Electronics",
      "Analog Design",
      "Solar Energy",
      "Voltage Regulation",
      "PCB Design",
      "Embedded Hardware"
    ],
    icon: Sun,
    highlight: "Analog Power Control",
    media: [
      {
        type: "image",
        src: "/images/_nJVd6N3DJJ.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "Analog Charging Circuit Design",
      "Adjustable Voltage Regulation System",
      "Discrete Component Implementation",
      "Custom PCB Layout",
      "Battery Charging Control System"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Analog solar charging circuit designed to regulate battery charging voltage using discrete components. Provides a simple, reliable, and cost-effective solution for solar-powered battery systems."
      },
      {
        heading: "Core Design Concept",
        body: "Linear regulation stabilizes output voltage across varying solar input conditions.",
        bullets: [
          "Low-dropout linear regulator architecture",
          "Adjustable output voltage via potentiometer",
          "Analog control independent of microcontrollers",
          "Cost-effective, easy-to-build design"
        ]
      },
      {
        heading: "Circuit Architecture",
        body: "Circuit integrates voltage sensing, amplification, and power regulation stages.",
        bullets: [
          "P-channel MOSFET as series pass element",
          "Differential amplifier for voltage comparison",
          "Zener diode for reference voltage stabilization",
          "Passive components for filtering and stability"
        ],
        images: [
          "/images/schematic_diy_solar_charger_2021-08-15_cropped_Wz5lXXro5H.jpg"
        ]
      },
      {
        heading: "Power Characteristics",
        body: "Designed for moderate power solar charging applications.",
        bullets: [
          "Supports ~12V solar panel input",
          "Adjustable output range: 7V – 14V",
          "Handles up to ~4A current",
          "Low dropout voltage (~1.25V)"
        ]
      },
      {
        heading: "Protection & Indicators",
        body: "Basic protection and user feedback mechanisms included.",
        bullets: [
          "Reverse polarity protection",
          "LED indicators for charging and regulation states",
          "Low battery discharge current (~1mA)"
        ]
      },
      {
        heading: "PCB Design",
        body: "PCB optimized for practical implementation with through-hole components.",
        bullets: [
          "Simple layout for easy assembly",
          "Optimized for analog signal stability",
          "Supports rapid prototyping and DIY builds"
        ],
        images: [
          "/images/pcb_pcb_diy_solar_charger_2021-08-15_mqHFilrLOX.jpg",
          "/images/pcb_pcb_diy_solar_charger_2021-08-15_full_YbFu5lYToM.jpg",
          "/images/pcb_pcb_diy_solar_charger_2021-08-15_back_5CxAQZw3BH.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates practical analog circuit design and power electronics principles. Enables efficient, low-cost solar battery charging solutions using discrete components without digital control."
      }
    ]
  },
  {
    slug: "e9a4d7",
    title: "Integrated Solar Energy Management Module",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "power-electronics"],
    description: "Fully integrated solar power system with battery management, voltage regulation, and real-time energy monitoring for off-grid deployments.",
    longDescription: "Integrated solar energy management system maintaining continuous battery charge for remote embedded devices. Automatically switches between solar input, external power, and battery while providing stable regulated output. Incorporates battery charging, fuel gauging, and high-efficiency buck-boost conversion to ensure reliable operation under varying environmental conditions. Architecture optimized for long-term unattended deployment in outdoor and off-grid applications.",
    tags: [
      "Power Electronics",
      "Solar Energy",
      "Battery Management",
      "Energy Systems",
      "PCB Design",
      "Embedded Systems"
    ],
    icon: Sun,
    highlight: "Power Management System",
    media: [
      {
        type: "image",
        src: "/images/img_0352_sPzaNzw4Qc.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "Solar Power Management System",
      "Battery Monitoring & Fuel Gauge Integration",
      "Buck-Boost Voltage Regulation",
      "Multi-Source Power Switching",
      "Custom PCB Design"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Integrated solar-powered energy system for long-term deployment of embedded devices in outdoor environments. Manages multiple power sources while maintaining battery charge levels to ensure continuous operation."
      },
      {
        heading: "System Architecture",
        body: "Combines charging, voltage regulation, energy monitoring, and power switching into a compact embedded platform.",
        bullets: [
          "Integration of solar and DC input charging",
          "Automatic switching between power sources",
          "Stable regulated output for embedded systems",
          "Continuous battery monitoring and protection"
        ],
        images: [
          "/images/screen_shot_2017-05-09_at_9_09_43_am_ElmXnIby3B.jpg"
        ]
      },
      {
        heading: "Charging & Power Control",
        body: "Manages battery charging from multiple input sources while ensuring safe operation.",
        bullets: [
          "Integrated LiPo charging controller",
          "Automatic charge regulation based on input conditions",
          "Thermal-aware charging control",
          "Safe handling of variable solar input levels"
        ]
      },
      {
        heading: "Voltage Regulation",
        body: "High-efficiency buck-boost converter maintains consistent output voltage under varying input or battery conditions.",
        bullets: [
          "Stable 4.2V output for microcontroller systems",
          "Handles wide input voltage range",
          "High-efficiency energy conversion",
          "Supports dynamic load conditions"
        ]
      },
      {
        heading: "Battery Monitoring",
        body: "Integrated fuel gauge provides real-time battery status and system health.",
        bullets: [
          "State-of-charge monitoring via I2C",
          "Accurate battery voltage measurement",
          "Automatic load cutoff at critical levels",
          "Supports intelligent power management decisions"
        ]
      },
      {
        heading: "PCB Design & Implementation",
        body: "PCB designed for reliable operation, optimized for power routing, thermal performance, and manufacturability.",
        bullets: [
          "Custom fabricated PCB for compact integration",
          "Optimized layout for power and signal separation",
          "Designed for assembly using reflow techniques"
        ],
        images: [
          "/images/screen_shot_2017-05-09_at_9_13_57_am_LINGIRGpG6.jpg",
          "/images/screen_shot_2017-05-09_at_7_40_56_am_3zij1uOsZ2.jpg"
        ]
      },
      {
        heading: "Real-World Deployment",
        body: "System deployed in outdoor environments powering connected sensors, demonstrating long-term reliability and autonomous operation."
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates advanced system-level power electronics design combining energy harvesting, battery management, voltage regulation, and monitoring. Provides a robust, autonomous energy system suitable for embedded deployments in real-world environments."
      }
    ]
  },
  {
    slug: "d7b3a9",
    title: "Multi-Node Environmental and Motion Monitoring System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "Distributed IoT system for real-time sensor data collection, cloud dashboard visualization, and automated alerting.",
    longDescription: "Multi-node IoT monitoring platform collecting environmental and motion sensor data from multiple embedded nodes and transmitting it to a cloud-based dashboard. Provides real-time visualization, event-driven alerts, and scalable data aggregation. Integrates microcontroller-based sensor acquisition, WiFi communication, cloud data pipelines, and dashboard visualization into a complete IoT architecture suitable for smart home, industrial, or monitoring applications.",
    tags: [
      "IoT",
      "Embedded Systems",
      "WiFi",
      "Cloud Integration",
      "Sensor Systems",
      "Data Streaming",
      "Real-Time Monitoring"
    ],
    icon: Activity,
    highlight: "IoT Monitoring System",
    media: [
      {
        type: "image",
        src: "/images/TM4C123G.jpg"
      }
    ],
    hidden: true,
    deliverables: [
      "Multi-Node Sensor System",
      "Cloud Data Pipeline Integration",
      "Real-Time Dashboard",
      "Automated Alert System",
      "Embedded Firmware (WiFi + REST)"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Distributed IoT platform aggregating sensor data from multiple nodes and presenting it on a centralized dashboard with real-time updates and alert capabilities."
      },
      {
        heading: "System Architecture",
        body: "Integration of embedded sensor nodes, wireless communication, and cloud services into a unified monitoring platform.",
        bullets: [
          "Microcontroller-based sensor nodes",
          "WiFi connectivity using embedded network stacks",
          "Cloud-based data streaming via REST APIs",
          "Dashboard visualization for real-time monitoring"
        ],
        images: [
          "/images/Dashboard_1.jpg",
          "/images/Dashboard_2.jpg"
        ]
      },
      {
        heading: "Sensor Integration",
        body: "Platform supports multiple sensor types for environmental and motion monitoring applications.",
        bullets: [
          "Motion detection via IR sensors",
          "Environmental sensing for temperature and humidity",
          "IMU-based activity detection",
          "Expandable sensor architecture"
        ],
        images: [
          "/images/Esquilio_with_sensors.jpg",
          "/images/TM4C123G.jpg"
        ]
      },
      {
        heading: "Cloud & Data Pipeline",
        body: "Sensor data transmitted to cloud services and visualized on real-time dashboards.",
        bullets: [
          "REST-based data transmission to cloud endpoints",
          "Data streaming to Dweet.io platform",
          "Dashboard visualization using Freeboard.io",
          "Aggregation of data from multiple nodes"
        ]
      },
      {
        heading: "Alert System",
        body: "Automated alerts triggered based on sensor conditions and thresholds.",
        bullets: [
          "Event-triggered alerts for motion detection",
          "Weather-based notifications",
          "SMS notifications via external APIs",
          "Threshold-based monitoring logic"
        ]
      },
      {
        heading: "Firmware Implementation",
        body: "Embedded firmware manages sensor acquisition, data processing, and cloud communication.",
        bullets: [
          "WiFi connectivity and network handling",
          "Sensor data acquisition and filtering",
          "REST API communication with cloud services",
          "Event-driven alert logic implementation"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Full-stack IoT system integrating embedded hardware, wireless communication, cloud data pipelines, and real-time visualization. Provides scalable monitoring with automated alerting for deployment in smart home, industrial, and environmental applications."
      }
    ]
  },
  {
    slug: "6b2f9a",
    title: "ESP32-Based Development & Prototyping Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description: "Custom ESP32 development board with enhanced power input, programming interface, and usability for embedded applications.",
    longDescription: "Custom ESP32 development board in Arduino Uno form factor, optimized for usability, power handling, and real-world deployment. Revision 2.0 includes a DC barrel power connector, dedicated programming header with auto-reset/flash circuitry, and improved decoupling for voltage stability. Board optimized for rapid prototyping and permanent installations, addressing limitations identified during practical use of the initial design.",
    tags: [
      "ESP32",
      "PCB Design",
      "Embedded Systems",
      "Hardware Design",
      "Power Electronics",
      "IoT"
    ],
    icon: Cpu,
    highlight: "Custom PCB Design",
    media: [
      {
        type: "image",
        src: "/images/_mi0rAzkkTd.jpg"
      }
    ],
    hidden: false,
    deliverables: [
      "Custom PCB Layout & Routing",
      "Rev 2.0 Hardware Design",
      "Programming Interface Circuit",
      "Power Input Design",
      "Assembly & Validation"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "ESP32 development board in Arduino Uno form factor designed to improve usability and reliability for embedded development. Revision 2.0 addresses practical limitations observed during real-world use.",
        images: [
          "/images/stressimage.jpg"
        ]
      },
      {
        heading: "Design Evolution",
        body: "Initial revision prioritized minimal hardware, but practical usage revealed missing features limiting usability.",
        bullets: [
          "Rev 1.0 lacked USB interface and dedicated power connector",
          "OTA programming reduced hardware complexity",
          "External wiring required for development power",
          "Need for integrated interfaces identified"
        ]
      },
      {
        heading: "Hardware Improvements",
        body: "Revision 2.0 introduces enhancements for improved usability and robustness.",
        bullets: [
          "DC barrel connector for stable external power input",
          "6-pin programming header for USB-to-serial interface",
          "Auto reset/flash circuitry with transistor-based design",
          "Additional decoupling capacitors for voltage stability",
          "Optimized PCB routing and thermal management"
        ]
      },
      {
        heading: "Power Design",
        body: "Linear regulator used for 3.3V ESP32 supply with considerations for future upgrades.",
        bullets: [
          "3.3V LDO regulator for ESP32 supply",
          "Supports 7.2V–12V input via barrel jack",
          "Handles moderate load (~800mA)",
          "Future plan: switch to buck converter for higher efficiency"
        ]
      },
      {
        heading: "Assembly Process",
        body: "Board assembled using standard PCB prototyping techniques.",
        bullets: [
          "Stencil-based solder paste application",
          "Component placement in minutes",
          "Hotplate reflow at ~223°C",
          "Manual inspection for solder defects",
          "Through-hole component finishing"
        ],
        images: [
          "/images/image_tdlmsDBCBY.jpg",
          "/images/image_Vb2G43zPK5.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Iterative hardware design demonstrates practical PCB layout, power system design, embedded hardware integration, and usability improvements across revisions."
      }
    ]
  },
  {
    slug: "f6c2d8",
    title: "RP2040 Microcontroller Breakout Platform",
    category: "Hardware Design",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "prototyping"],
    description: "Breakout board for RP2040 microcontrollers to simplify pin access and prototyping without a breadboard.",
    longDescription: "Compact breakout PCB for RP2040-based microcontrollers. Provides easy access to all pins, clear labeling on the front, and optional female headers for connectivity. Supports both Pico and Pico W modules and reduces assembly complexity for embedded prototyping and rapid development.",
    tags: ["PCB Design", "Embedded Systems", "Prototyping", "IoT", "Microcontroller"],
    icon: Cpu,
    highlight: "Microcontroller Breakout Solution",
    hidden: false,
    media: [
      { type: "image", src: "/images/_06Ck6Qr4WW.jpg" }
    ],
    deliverables: [
      "Custom breakout PCB for RP2040",
      "Clear pin labeling for easy prototyping",
      "Optional female headers for connectivity",
      "Support for Pico and Pico W modules",
      "Rapid assembly for embedded projects"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "RP2040 microcontroller requires accessible pins for prototyping. Standard Pico boards are small and can make direct access to pinouts cumbersome without a breakout solution."
      },
      {
        heading: "Design Motivation",
        body: "Custom PCB designed to improve pin accessibility with clear front labeling and optional female headers, enabling easy connection of Pico and Pico W modules without memorizing layouts.",
        images: [
          "/images/pico-carrier-1200x1600.jpg",
          "/images/pico-1024x768.jpg",
          "/images/pico-reel-1024x629.jpg"
        ]
      },
      {
        heading: "Assembly",
        body: "PCB assembly involves soldering the Pico or Pico W and female headers. The breakout board can be used independently or integrated with the Pico W, noting the absence of castellated holes on Pico W."
      },
      {
        heading: "Schematics",
        images: [
          "/images/schematic_pico-breakout_2022-09-28_cKvJjDmelK.jpg"
        ]
      }
    ]
  },
  {
    slug: "f7d2e4",
    title: "Embedded Display Module Carrier Board",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "display-integration"],
    description: "Custom PCB carrier board designed for compact embedded display modules, integrating multiple I/O interfaces.",
    longDescription: "Custom carrier board for embedded display modules powered by a Compute Module. Integrates USB ports, battery connector, HDMI, GPIO headers, and connectors for camera and microSD. PCB designed in KiCAD, providing a compact and expandable solution suitable for tablet-style embedded devices.",
    tags: ["PCB Design", "Embedded Systems", "Display Module", "Hardware Integration", "KiCAD"],
    icon: Cpu,
    highlight: "Custom Embedded Carrier Board",
    hidden: true,
    media: [
      { type: "image", src: "/images/pipcb_bKKYPxhpl5.jpg" }
    ],
    deliverables: [
      "Custom PCB carrier board for embedded display module",
      "Supports USB, HDMI, GPIO, camera, and microSD interfaces",
      "KiCAD-designed PCB layout",
      "Expandable for future battery and Ethernet integration",
      "Compact tablet-style embedded hardware solution"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Compact carrier boards facilitate integration of embedded display modules, providing multiple I/O interfaces while maintaining a small form factor suitable for tablet-style devices."
      },
      {
        heading: "Carrier Board Design",
        body: "Carrier board integrates two USB 2.0 ports, 5V battery connector, HDMI support, 40-pin GPIO header, and USB Type-C power input. Slots provided for camera, display, and microSD connectors."
        ,
        images: [
          "/images/pipcb2_19VWI8JlYy.jpg"
        ]
      },
      {
        heading: "PCB Implementation",
        body: "PCB designed using KiCAD for compact layout and future expansion. Current version lacks battery circuit; future iterations plan to integrate a battery, metal shield for thermal management, and optional Ethernet interface."
      }
    ]
  },
  {
    slug: "8c4d2f",
    title: "ESP32-Based Multi-Input Drone Controller",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "Embedded drone controller using ESP32, supporting WiFi, gesture input, and gamepad interfaces for real-time flight operation.",
    longDescription: "Standalone embedded drone controller implemented with ESP32, interfacing with DJI Tello drones via WiFi. Supports multiple input modalities including physical buttons, gesture-based control using MPU6050, and Bluetooth gamepad integration. WiFi captive portal simplifies pairing and setup. Real-time feedback is provided through LEDs, OLED display, and onboard controls. Architecture separates communication, input handling, and control logic to allow modular expansion for future features.",
    tags: [
      "ESP32",
      "Drone Control",
      "IoT",
      "WiFi",
      "Embedded Systems",
      "MPU6050",
      "Robotics"
    ],
    icon: Wifi,
    highlight: "Drone Control System",
    media: [
      { type: "image", src: "/images/_fX8bRTRZXj.jpg" }
    ],
    hidden: true,
    deliverables: [
      "ESP32 Firmware",
      "Tello API Integration",
      "Gesture Control System",
      "Gamepad Interface (Bluetooth)",
      "WiFi Captive Portal Setup"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Standalone embedded controller for DJI Tello drones using ESP32. Enables wireless control with multiple input methods including buttons, gestures, and gamepads. Designed for modularity and flexibility."
      },
      {
        heading: "Hardware System",
        body: "Integrates sensing, feedback, and control hardware into a compact embedded platform.",
        bullets: [
          "ESP32 microcontroller for processing and WiFi communication",
          "MPU6050 for gesture-based control",
          "OLED display for status and feedback",
          "LED indicators for connection and battery status",
          "Push buttons for flight actions (takeoff, land, emergency stop)",
          "LiPo battery-powered portable system"
        ],
        images: [
          "/images/sampleassembledcontroller_FJ8MsyUhnH.jpg"
        ]
      },
      {
        heading: "Drone & Input Devices",
        body: "Supports multiple drone models and user input devices for flexible operation.",
        bullets: [
          "Compatible with Tello, Tello EDU, and Tello Talent drones",
          "Supports PS3, PS4, Switch, and 8BitDo gamepads",
          "Fallback control via onboard buttons and gestures"
        ],
        images: [
          "/images/whitetello_wI2Z3XGB66.jpg",
          "/images/ps4red_oBsDN2kTgP.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "ESP32 communicates with drone over WiFi using Tello SDK, handling input processing locally.",
        bullets: [
          "ESP32 connects directly to Tello WiFi network",
          "Commands sent via Tello UDP-based API",
          "Separation between input handling and command generation",
          "Real-time control loop ensures responsive flight behavior"
        ],
        images: [
          "/images/samplecontrollerlayout_oAccSVZ36v.jpg"
        ]
      },
      {
        heading: "Gesture Control",
        body: "Gesture-based flight control via onboard motion sensing.",
        bullets: [
          "MPU6050 detects tilt direction",
          "Mapped to directional flight commands",
          "Enables intuitive hands-on control",
          "Reduces reliance on external controllers"
        ]
      },
      {
        heading: "WiFi Configuration",
        body: "Captive portal allows seamless pairing between controller and drone.",
        bullets: [
          "ESP32 hosts WiFi configuration portal",
          "User selects Tello SSID from list",
          "Automatic connection and binding",
          "No manual configuration required"
        ]
      },
      {
        heading: "Software System",
        body: "Firmware implemented using Arduino framework with integrated libraries.",
        bullets: [
          "ESP32 support via Arduino Board Manager",
          "MPU6050 and OLED libraries for sensor and UI integration",
          "Bluepad32 library for Bluetooth gamepad support",
          "Modular firmware enabling feature expansion"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Complete embedded drone control system integrating wireless communication, multiple input interfaces, and real-time flight control. Demonstrates ESP32 networking, multi-input control design, and modular system architecture for interactive robotics applications."
      }
    ]
  },
  {
    slug: "b7c4e2",
    title: "Time-of-Flight Distance Sensing Integration on ARM-Based Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "sensor-integration", "pcb-hardware"],
    description: "High-precision distance sensing system integrating a SPAD-based Time-of-Flight sensor with an ARM microcontroller platform.",
    longDescription: "This project demonstrates the integration of a high-precision Time-of-Flight (ToF) sensor into an ARM-based embedded platform. The system enables accurate distance measurement using SPAD and histogram-based sensing technology, with optimized firmware handling I2C communication, interrupt-driven acquisition, and real-time data output via USB. The implementation focuses on reliable sensor interfacing, timing accuracy, and embedded system integration for distance sensing applications.",
    tags: ["Time-of-Flight", "ToF Sensor", "Embedded Systems", "I2C", "Sensor Integration", "ARM MCU"],
    icon: Cpu,
    highlight: "Precision Distance Sensing",
    hidden: false,
    media: [
      {
        type: "image",
        src: "/images/_tDZeRdmVD5.jpg"
      }
    ],
    deliverables: [
      "ToF sensor integration on ARM-based microcontroller",
      "I2C communication stack implementation",
      "Interrupt-driven measurement handling",
      "USB-based real-time data output",
      "Distance measurement and calibration workflow"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Implemented a Time-of-Flight distance measurement system by integrating a SPAD-based sensor with an ARM microcontroller evaluation platform. The system enables accurate ranging using histogram-based sensing and real-time data acquisition. :contentReference[oaicite:0]{index=0}"
      },
      {
        heading: "Hardware Integration",
        body: "The sensor module is connected through Arduino-style headers, allowing direct interfacing with the evaluation board. The design ensures stable communication and proper signal routing for reliable operation.",
        images: [
          "/images/tmf8808_ra4m2_RKsC00pjYX.jpg"
        ]
      },
      {
        heading: "Sensor Technology",
        body: "The ToF sensor uses SPAD (Single Photon Avalanche Diode), TDC, and histogram processing to measure distance with high precision. The system supports measurement ranges up to several meters with firmware-level extensions for enhanced performance. :contentReference[oaicite:1]{index=1}"
      },
      {
        heading: "Firmware Architecture",
        body: "Firmware was developed to manage I2C communication, sensor control signals, and interrupt-based event handling. Dedicated GPIO lines are used for enable and interrupt signaling, ensuring efficient asynchronous measurement processing."
      },
      {
        heading: "Peripheral Configuration",
        body: "The system configures I2C communication channels, external interrupt handling, and periodic timers for sensor operation. Proper alignment between hardware pin mapping and firmware stacks ensures stable and synchronized operation across all interfaces.",
        images: [
          "/images/ren2_C9y7N7vwCK.jpg",
          "/images/ren_arduino_Rnfj841nIw.jpg"
        ]
      },
      {
        heading: "Data Acquisition & Output",
        body: "Distance measurements are processed and transmitted through a USB interface, allowing direct visualization and debugging without additional external tools. The system outputs structured measurement data including confidence, raw distance, corrected distance, and temperature."
      },
      {
        heading: "System Behavior",
        body: "The device performs on-demand measurements triggered via command input, processes sensor data internally, and outputs structured results. Special attention was given to timing constraints and USB interface stability for reliable operation."
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates strong expertise in sensor integration, embedded firmware development, and real-time data acquisition. It highlights the ability to work with advanced sensing technologies and integrate them into robust embedded platforms for precise measurement applications."
      }
    ]
  },
  {
    slug: "d8a4c1",
    title: "Multi-Target Optical Ranging System with Embedded Time-of-Flight Processing",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "sensor-integration", "real-time-systems"],
    description: "Embedded optical ranging system using a high-resolution Time-of-Flight sensor with multi-object detection and real-time data acquisition.",
    longDescription: "This project demonstrates the integration of an advanced Time-of-Flight (ToF) ranging sensor into an embedded microcontroller platform for precise distance measurement and multi-object detection. The system captures real-time ranging data, processes multiple return signals, and outputs structured distance information through a serial interface. The implementation highlights reliable I2C communication, real-time measurement handling, and efficient embedded firmware design for optical sensing applications.",

    tags: [
      "Time-of-Flight",
      "ToF Sensor",
      "STM32",
      "Embedded Systems",
      "I2C",
      "Multi-Object Detection",
      "Sensor Integration"
    ],

    icon: Cpu,
    highlight: "Optical Ranging System",

    hidden: true,

    media: [
      {
        type: "image",
        src: "/images/o1cn0108sim31pnnpgi3uic_2212561741885_png_468x468q50_jpg__lxVQsKebbW.jpg"
      }
    ],

    deliverables: [
      "Embedded ToF ranging system",
      "Multi-object detection implementation",
      "Real-time distance acquisition pipeline",
      "I2C sensor communication interface",
      "Serial-based measurement output system"
    ],

    sections: [
      {
        heading: "Project Overview",
        body: "Developed an embedded optical ranging system capable of detecting and measuring distances to multiple objects simultaneously using a Time-of-Flight sensor. The system provides real-time distance output and supports extended sensing ranges for various applications. :contentReference[oaicite:1]{index=1}"
      },

      {
        heading: "Hardware Architecture",
        body: "The system is built on an STM32 microcontroller platform paired with a dedicated ToF expansion board. The modular design allows rapid integration while maintaining reliable communication and signal integrity.",
        images: [
          "/images/STM32_Nucleo64_Development_Board_with_STM32L073RZT6_MCU_supports_Arduino_and_ST_morpho_connectivity.jpg"
        ]
      },

      {
        heading: "Sensor Capabilities",
        body: "The ToF sensor supports high-precision ranging over several meters and enables simultaneous detection of multiple objects within the field of view. This allows distinguishing foreground objects from background surfaces in real time. :contentReference[oaicite:2]{index=2}"
      },

      {
        heading: "Embedded Firmware",
        body: "Firmware was implemented to initialize the sensor, configure I2C communication, and continuously acquire measurement data. The system handles asynchronous measurement readiness and processes multi-object ranging results efficiently."
      },

      {
        heading: "Multi-Object Detection",
        body: "The system processes multiple return signals from the sensor, allowing detection of several objects at different distances. Each detected object is reported individually, enabling separation between near-field obstacles and background surfaces."
      },

      {
        heading: "Data Acquisition & Output",
        body: "Distance values are streamed via a serial interface in real time. The system outputs individual measurements per detected object, allowing direct visualization and debugging without additional processing layers.",
        images: [
          "/images/image_JQH8MeDUyh.jpg"
        ]
      },

      {
        heading: "System Behavior",
        body: "During operation, the system continuously measures distances and dynamically adapts to scene changes. When objects enter the sensing field, additional distance readings are generated, demonstrating true multi-target detection capability."
      },

      {
        heading: "Hardware Integration",
        body: "The sensor module connects directly to the microcontroller board through standardized headers, enabling a compact and reliable embedded implementation.",
      },

      {
        heading: "Engineering Outcome",
        body: "This project demonstrates strong expertise in optical sensing, embedded firmware development, and real-time data acquisition. It highlights the ability to integrate advanced ToF sensors into embedded platforms for accurate multi-object distance measurement applications."
      }
    ]
  },
  {
    slug: "c5e8a2",
    title: "Multi-Channel LED Control Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description: "Embedded lighting control system with multi-channel PWM control, constant-current LED drivers, and RS485 communication support.",
    longDescription: "Multi-channel lighting control system capable of driving high-power LEDs using constant-current regulation and PWM dimming. Integrates a microcontroller for real-time channel control, RS485 communication for networked operation, and temperature sensing for safe operation. Each channel is independently managed, enabling flexible lighting patterns and scalable expansion. Focuses on reliability, thermal protection, and efficient power delivery for high-current LED applications.",
    tags: [
      "Power Electronics",
      "PCB Design",
      "Embedded Systems",
      "PWM Control",
      "LED Driver",
      "RS485",
      "Hardware Design"
    ],
    icon: Lightbulb,
    highlight: "LED Power Control",
    media: [
      { type: "image", src: "/images/_9AJ5MQyfmN.jpg" }
    ],
    hidden: true,
    deliverables: [
      "Multi-Channel LED Driver Hardware",
      "PWM Control Firmware",
      "RS485 Communication Interface",
      "Thermal Monitoring Integration",
      "Custom PCB Design (KiCad)"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Multi-channel lighting control system for high-power LEDs providing precise brightness management and safe operating conditions. Supports scalable deployment and remote control via serial communication."
      },
      {
        heading: "System Architecture",
        body: "Combines power regulation, control logic, and communication within a unified embedded platform.",
        bullets: [
          "Microcontroller-based PWM control",
          "Three independent LED driving channels",
          "Constant current regulation for stable output",
          "Integrated communication interface for scalability"
        ]
      },
      {
        heading: "Power & Driver Design",
        body: "Each LED channel uses constant-current circuitry to ensure efficient and safe operation.",
        bullets: [
          "Constant-current LED drivers with thermal protection",
          "Supports high-current operation (~1A per channel)",
          "Resistor-configured current adjustment",
          "Overcurrent and thermal protection"
        ],
        images: [
          "/images/0104054923732.jpg"
        ]
      },
      {
        heading: "Control System",
        body: "Microcontroller generates PWM signals and manages communication across channels.",
        bullets: [
          "PWM-based brightness control",
          "Synchronized multi-channel operation",
          "UART communication interface",
          "Flexible lighting pattern generation"
        ]
      },
      {
        heading: "Communication Interface",
        body: "RS485 interface enables long-distance control and multi-device networking.",
        bullets: [
          "Half-duplex RS485 communication",
          "Supports multi-node bus architecture",
          "Reliable long-range data transmission",
          "Expandable system architecture"
        ]
      },
      {
        heading: "Thermal & Sensor Integration",
        body: "Temperature sensing ensures safe operation of high-current LEDs.",
        bullets: [
          "Digital temperature sensors",
          "Thermal protection mechanisms",
          "Enhanced reliability under high load"
        ]
      },
      {
        heading: "PCB Design & Fabrication",
        body: "PCB designed in KiCad with focus on power routing, thermal considerations, and manufacturability.",
        bullets: [
          "Optimized PCB layout for high-current delivery",
          "3D visualization for mechanical validation",
          "Designed for automated fabrication"
        ],
        images: [
          "/images/1410048502637.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates expertise in power electronics, embedded control, and PCB design. Provides reliable, scalable multi-channel LED control with integrated communication and thermal awareness for real-world deployment."
      }
    ]
  },
  {
    slug: "b3f6d1",
    title: "Precision Multi-Channel Smart Lighting Controller",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "pcb-hardware", "power-electronics"],
    description: "Compact, professional-grade LED controller for five independently driven channels with high-current capability and IoT connectivity.",
    longDescription: "This project demonstrates a high-performance LED control platform with five independently managed channels, supporting both warm/cool and RGB strips. The design integrates an ESP32-C3 microcontroller, robust MOSFET-based switching, and high-efficiency power regulation. USB-C programming, WiFi/BLE connectivity, and optimized PCB layout ensure reliable operation for professional lighting applications.",
    tags: ["Embedded Systems", "RGB LED", "CCT Control", "ESP32-C3", "Power Electronics", "PWM Control", "IoT"],
    icon: Lightbulb,
    highlight: "Precision Multi-Channel Lighting",
    hidden: true,
    media: [
      { type: "image", src: "/images/_3sxi2gqqKV.jpg" }
    ],
    deliverables: [
      "Compact multi-channel LED controller",
      "Independent channel drivers with high-current MOSFETs",
      "LM2678 buck and TPS7A20 LDO power stages",
      "USB-C programming interface",
      "WiFi/BLE connectivity for IoT integration"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Professional-grade LED controller for five independently driven channels. Capable of delivering up to 2A per channel with robust power management and protection for modern smart lighting applications."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "ESP32-C3-WROOM-02 microcontroller",
          "LM2678T buck converter (12V→5V)",
          "TPS7A20 LDO (5V→3.3V)",
          "IRLZ44N MOSFET drivers",
          "2-layer PCB layout"
        ],
        images: [
          "/images/bottom_9cV7GEabuo.jpg",
          "/images/top_B19vTRjtYF.jpg",
          "/images/top_QegcRwxIa5.jpg"
        ]
      },
      {
        heading: "Operation Principles",
        body: "Provides dedicated output connectors for different LED strips with proper electrical isolation. USB-C interface supplies logic power and programming access."
      },
      {
        heading: "Power Conversion",
        body: "LM2678T buck regulator supplies RGB strips, while TPS7A20 LDO powers the ESP32-C3 microcontroller, ensuring stable operation."
      },
      {
        heading: "LED Driving Architecture",
        body: "Channels are switched via IRLZ44N MOSFETs. GND separation between logic and power minimizes noise and ensures signal integrity."
      },
      {
        heading: "Key Technical Features",
        bullets: [
          "Five independent channels, each supporting up to 2A",
          "WiFi and BLE connectivity for remote control",
          "USB-C programming interface",
          "Robust electrical protections: polyfuse, TVS diodes, Schottky diodes",
          "Optimized PCB layout for thermal management and high-current paths",
          "Mutually exclusive output for RGB or CCT strips"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates professional-level LED control, combining high-current capability, IoT integration, and robust protections. Suitable for smart homes, architectural lighting, and commercial installations."
      }
    ]
  },
  {
    slug: "d2e8f4",
    title: "High-Fidelity USB PD Debug and Monitoring Tool",
    category: "Hardware Design",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "power-electronics"],
    description: "USB Power Delivery interface tool for capturing, injecting, and monitoring PD communications and accessing SBU debug signals.",
    longDescription: "This project demonstrates a professional-grade USB Power Delivery interface platform designed for engineers to monitor, test, and access SBU (Sideband Use) debug consoles on USB-C devices. The tool integrates an STM32G071CB microcontroller with dual USB PD interfaces and a CH342 dual UART-to-USB converter, enabling full monitoring, man-in-the-middle injection, and debug console access. The platform provides advanced features for PD experimentation while ensuring signal integrity and real-time data acquisition.",
    tags: ["USB PD", "STM32", "Embedded Systems", "UART", "Power Delivery", "Debug Tools", "PCB Design"],
    icon: Cpu,
    highlight: "Professional USB PD Debug Tool",
    hidden: true,
    media: [
      { type: "image", src: "/images/image_rjpw4I8IGn.jpg" }
    ],
    deliverables: [
      "USB-C PD monitoring and injection interface",
      "STM32G071CB microcontroller for real-time protocol handling",
      "CH342 dual UART-to-USB interface for SBU debug access",
      "Dual USB-C connectors supporting PD and USB 2.0 passthrough",
      "High-fidelity four-layer PCB design with robust layout"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Professional USB PD interface tool for monitoring, injecting, and accessing debug signals over USB-C SBU lines. Designed for engineers working with PD-enabled devices and embedded debugging."
      },
      {
        heading: "Hardware Architecture",
        bullets: [
          "STM32G071CB microcontroller with dual USB PD interfaces",
          "CH342 dual UART-to-USB (CDC ACM) converter for SBU signal access",
          "Dual USB-C connectors supporting power delivery and USB 2.0 data",
          "Four-layer PCB for signal integrity and high-current handling"
        ],
        images: [
          "/images/image_bHqcfQa721.jpg",
          "/images/image_4xDgesPZwg.jpg"
        ]
      },
      {
        heading: "Functional Capabilities",
        bullets: [
          "Monitoring of USB Power Delivery communications",
          "Man-in-the-middle injection for protocol testing",
          "Access to SBU debug UART signals (3.3V logic)",
          "Real-time data acquisition and logging"
        ]
      },
      {
        heading: "Operational Considerations",
        bullets: [
          "Requires negotiated voltage agreement to avoid damage",
          "Fast Role Swap signals can be received but not sent",
          "CC lines are 5V tolerant; higher voltages can cause damage"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates advanced hardware design for USB PD monitoring, combining embedded microcontroller control, high-fidelity UART capture, and robust PCB architecture. Suitable for professional evaluation, debugging, and testing of USB-C PD-enabled devices."
      }
    ]
  },
  {
    slug: "d6a9b4",
    title: "Precision Embedded IMU Platform with Full Sensor Integration",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "hardware-design", "sensor-integration"],
    description: "High-precision IMU development board with STM32F405 MCU, ICM42688-P sensor, external clocks, and advanced communication protocols.",
    longDescription: "Professional-grade Inertial Measurement Unit (IMU) platform designed for embedded systems experimentation and advanced navigation algorithm development. The board integrates a high-precision ICM42688-P sensor with STM32F405 microcontroller, supports multiple communication protocols (MAVLink, CAN2.0B, DroneCAN, ROS2), and features external crystals for stable timing. The platform enables accurate orientation, motion tracking, and AHRS computation in real-time.",
    tags: ["IMU", "Embedded Systems", "STM32F405", "ICM42688-P", "AHRS", "Sensor Fusion", "Navigation"],
    icon: Activity,
    highlight: "High-Precision IMU Platform",
    hidden: false,
    media: [
      { type: "image", src: "/images/7JJxhUUOqd.jpg" }
    ],
    deliverables: [
      "STM32F405-based IMU development board",
      "ICM42688-P high-precision IMU sensor",
      "External MCU and sensor clocking",
      "Python GUI for live data visualization and parameter tuning",
      "Support for MAVLink, CAN2.0B, DroneCAN, and ROS2 protocols"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "This IMU platform enables engineers and researchers to work with high-precision inertial sensors, supporting embedded experimentation, AHRS, and sensor fusion applications."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "STM32F405 Processor",
          "ICM42688-P high-precision, low-noise IMU sensor",
          "External 8 MHz crystal for MCU",
          "External 32.768 kHz crystal for IMU timing",
          "Interfaces: USB-C serial, UART (TTL), I2C, CAN 2.0B",
          "Flexible USB-C power supply"
        ]
      },
      {
        heading: "Communication & Protocols",
        bullets: [
          "MAVLink for UAV integration",
          "CAN2.0B for automotive/industrial use",
          "DroneCAN for multi-node UAV systems",
          "ROS2 support for robotics applications"
        ]
      },
      {
        heading: "Performance",
        bullets: [
          "Static yaw instability: 0.01°/hour",
          "High-resolution, low-noise data acquisition",
          "Stable timing via external crystal oscillators"
        ]
      },
      {
        heading: "Software Integration",
        bullets: [
          "Firmware developed for STM32CubeIDE / CubeMX",
          "Real-time sensor acquisition and processing",
          "AHRS and orientation calculation",
          "Python-based GUI for monitoring and tuning"
        ]
      },
      {
        heading: "Application Scope",
        body: "Suitable for embedded systems education, UAV navigation, robotics, sensor fusion research, and real-time AHRS development. Fully modular, high-precision design enables professional experimentation and evaluation."
      }
    ]
  },
  {
    slug: "9c7e4b",
    title: "Wireless RGB LED Control Module",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "pcb-hardware"],
    description: "Wireless RGB LED controller with PWM power stage and real-time mobile application interface for high-power LED strips.",
    longDescription: "Wireless lighting control module designed to drive high-power RGB LED strips using PWM switching and WiFi-based mobile app control. ESP32 microcontroller interfaces with MOSFET power stages to handle loads up to 100W. The system includes voltage regulation, custom PCB design, and a 3D-printed enclosure for a complete hardware solution suitable for smart lighting applications.",
    tags: [
      "ESP32",
      "IoT",
      "PWM Control",
      "Power Electronics",
      "Embedded Systems",
      "LED Control",
      "PCB Design"
    ],
    icon: Wifi,
    highlight: "Wireless LED Control",
    media: [
      { type: "image", src: "/images/_OXf2590Kja.jpg" }
    ],
    hidden: true,
    deliverables: [
      "Wireless LED Control System",
      "ESP32 Firmware Integration",
      "MOSFET Power Driver Stage",
      "Custom PCB Design",
      "3D Printed Enclosure"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Wireless RGB LED control module designed for high-current LED strips, combining embedded control, power electronics, and mobile application interface into a compact, product-ready design."
      },
      {
        heading: "System Architecture",
        body: "Integrates wireless communication, PWM generation, and high-current switching into a single embedded platform.",
        bullets: [
          "ESP32-based wireless control system",
          "PWM signal generation for RGB channels",
          "MOSFET-based high-current switching stage",
          "Real-time control through mobile application"
        ],
        images: [
          "/images/unnamed.jpg"
        ]
      },
      {
        heading: "Power & Driver Stage",
        body: "LED channels driven via logic-level MOSFETs to efficiently handle high-current loads.",
        bullets: [
          "Supports up to 100W LED load",
          "IRLFZ44N MOSFET switching",
          "Compatible with 12V LED strips",
          "PWM-based brightness control for efficiency"
        ]
      },
      {
        heading: "Wireless Control System",
        body: "WiFi connectivity enables remote lighting control through a mobile application.",
        bullets: [
          "ESP32-C3 microcontroller",
          "Real-time control via app",
          "Adjustable color and brightness",
          "User-friendly interface integration"
        ],
        images: [
          "/images/unnamed1.jpg"
        ]
      },
      {
        heading: "PCB Design",
        body: "PCB designed for compact layout and optimized power routing using modern design workflows.",
        bullets: [
          "Custom PCB layout using Flux.ai",
          "Optimized routing for power and signal integrity",
          "Fabrication through rapid prototyping services"
        ]
      },
      {
        heading: "Mechanical Design",
        body: "Custom 3D-printed enclosure securely houses electronics.",
        bullets: [
          "Enclosure designed in Fusion 360",
          "STL export for 3D printing",
          "Compact and functional mechanical layout"
        ]
      },
      {
        heading: "Testing & Validation",
        body: "Validated with high-power RGB LED strips and mobile application interface for performance verification.",
        bullets: [
          "Real-time lighting control testing",
          "Stable operation under full load",
          "User interface validation through mobile app"
        ],
        images: [
          "/images/unnamed2.jpg",
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "End-to-end embedded system integrating wireless control, high-current power electronics, PCB design, and mechanical housing. Provides a complete IoT-enabled lighting solution ready for deployment in real-world applications."
      }
    ]
  },

  {
    slug: "9d1b73",
    title: "IoT Water Leak Detection & Notification System",
    category: "IoT & Connectivity",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "Event-driven water leak monitoring system using Particle Photon with cloud-based notifications and escalation logic.",
    longDescription: "Connected water leak detection platform built with Particle Photon and conductivity-based sensors. Detects flooding events in real time, publishes events to the cloud, and forwards notifications via webhook integration. Escalating alert schedule ensures persistent notifications until the leak is resolved. Architecture integrates embedded firmware, event-driven processing, and cloud notifications for scalable, reliable monitoring of homes, utility rooms, or critical equipment areas.",
    tags: [
      "Particle Photon",
      "Embedded C++",
      "Pushbullet",
      "Webhooks",
      "IoT Alerts",
      "Sensor Integration",
      "Cloud Events"
    ],
    icon: Droplet,
    highlight: "IoT Alerts",
    media: [
      { type: "image", src: "/images/acc34cba-ccd9-42da-9453-6c32af2e05d4.jpg" },
      { type: "image", src: "/images/ParticleCloudPushbullet.jpg" },
      { type: "image", src: "/images/Screenshot_2015-10-14-15-39-28.jpg" }
    ],
    hidden: true,
    deliverables: [
      "Particle Firmware",
      "Webhook Configuration",
      "Cloud Notification Pipeline",
      "Sensor Interface Design",
      "System Validation"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Lightweight IoT monitoring system detecting water leaks and providing immediate notifications to connected devices. Integrates embedded sensing, event-driven firmware, and webhook-based alert delivery to reduce response time in critical areas."
      },
      {
        heading: "System Architecture",
        body: "Event-driven pipeline where the sensor detects water presence, triggers cloud events, and activates remote notification services.",
        bullets: [
          "Water leak sensor connected to Particle Photon digital input",
          "Internal pull-up configuration simplifies hardware",
          "Leak detection event published to Particle Cloud",
          "Webhook forwards payload to Pushbullet for multi-device alerts"
        ],
        images: [
          "/images/ParticleCloudPushbullet.jpg"
        ]
      },
      {
        heading: "Hardware Interface",
        numbered: [
          {
            title: "Leak Sensor Integration",
            body: "Water sensor connected between ground and digital input; Particle Photon detects conductivity when water bridges contacts, providing minimal yet effective hardware."
          },
          {
            title: "On-Board Status Indication",
            body: "Built-in LED serves as local visual alarm for immediate confirmation of leak detection before remote notification."
          },
          {
            title: "Expandable Sensing",
            body: "Additional sensors can be assigned to free GPIO pins or wired in parallel for monitoring multiple locations."
          }
        ]
      },
      {
        heading: "Firmware Behavior",
        bullets: [
          "Periodic non-blocking sensor polling using elapsed timing",
          "State-based detection to prevent repeated false triggers",
          "Cloud publish events for dashboard and webhook forwarding",
          "Escalation schedule for persistent leak notifications"
        ]
      },
      {
        heading: "Alert Escalation Logic",
        body: "Firmware schedules repeated notifications while the fault condition persists to ensure reliable alerting.",
        bullets: [
          "Initial alert after 10 seconds",
          "Repeated alerts at 1 and 5 minutes",
          "Extended reminders at 15 minutes and 1 hour",
          "Recurring 4-hour notifications until leak is cleared"
        ]
      },
      {
        heading: "Outcome",
        body: "Provides a low-cost, reliable water leak alerting system combining embedded firmware with cloud integration. Demonstrates IoT design principles including sensor integration, real-time event publishing, webhook automation, and persistent remote notification handling."
      }
    ]
  },
  {
    slug: "f2c7e9",
    title: "Precision Electromagnetic Positioning Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "hardware-design", "mechatronics"],
    description: "Electromagnetic positioning platform using ATtiny1614 MCU with PID-controlled solenoid and hall-effect sensor feedback.",
    longDescription: "Digital magnetic stabilization platform using ATtiny1614 microcontroller, 12V solenoid, and hall-effect sensor. Features PID-style stabilization, SMD PCB layout, 3D-printed mechanical supports, and real-time firmware for precise levitation control.",
    tags: ["Embedded Systems", "Magnetic Levitation", "ATtiny1614", "PID Control", "Firmware", "SMD PCB", "Mechatronics"],
    icon: Cpu,
    highlight: "ATtiny1614 Magnetic Levitation",
    hidden: true,
    media: [
      { type: "image", src: "/images/_SqZ7rjw7xf.jpg" }
    ],
    deliverables: [
      "ATtiny1614-based levitation controller",
      "PID-controlled solenoid with hall-effect feedback",
      "Custom PCB with SMD component integration",
      "3D-printed enclosures for mechanical stability",
      "Firmware with core logic for real-time levitation control"
    ],
    sections: [
      {
        heading: "System Overview",
        body: "High-precision magnetic levitation system using ATtiny1614 MCU, solenoid, and hall-effect sensor. Demonstrates PID-style stabilization and mechatronic integration."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "ATtiny1614 Microprocessor",
          "AO4406 N-Channel MOSFET",
          "12V Solenoid (D25mm x H20mm, 5KG/50N)",
          "1117-5 5V Regulator",
          "Hall-effect sensor OH49E / linear variant",
          "Tactile switches (8mm shafts)",
          "Resistors and capacitors for analog circuitry",
          "SMD diodes",
          "3D-printed mechanical support components"
        ]
      },
      {
        heading: "3D-Printed Enclosures",
        body: "Custom 3D-printed components include base cover, UFO, rocker switch, and base plug, designed for mechanical support and integration of PCB and solenoid.",
        images: [
          "/images/image_AfQGMpegG8.jpg"
        ]
      },
      {
        heading: "Assembly Procedure",
        body: "Stepwise assembly including SMD placement, header insertion, switches, solenoid and hall sensor integration, and final enclosure assembly.",
        images: [
          "/images/1__add_smd_components_and_links_(small)_8QKgNUlXsx.jpg",
          "/images/2__add_headers_to_copper_side_(small)_Ln1ohojEAp.jpg",
          "/images/3__add_board_to_case_and_program_cpu_(small)_jX0Ien2QGi.jpg",
          "/images/oh40e_sensor_Zig3NVQP71.jpg",
          "/images/4__wire_up_power_and_solenoid_(small)_uPPybJhTe5.jpg",
          "/images/img_20230107_090259136_hdr_ZU3DVnWh6w.jpg"
        ]
      },
      {
        heading: "PCB Layout Overview",
        body: "Top-layer PCB layout showing SMD component placement, copper routing, and connection pads optimized for the ATtiny1614 magnetic levitation system.",
        images: [
          "/images/board_W9zo629mFW.JPG"
        ]
      },
      {
        heading: "Schematic Diagram",
        body: "Electrical schematic showing ATtiny1614 connections, MOSFET driver for the solenoid, hall-effect sensor inputs, and supporting passive components. Provides clear reference for assembly and troubleshooting.",
        images: [
          "/images/schematic_a6Emr769uF.jpg"
        ]
      },
      {
        heading: "Firmware Implementation",
        code: [
          "// ATtiny1614 Magnetic Levitation Core Logic",
          "int TRIGGER = 2740; // ADC trigger level",
          "int HYST = 35;       // Hysteresis",
          "int HALL_PIN = 33;   // Analog input from hall sensor",
          "int RELAIS_PIN = 23; // Output to solenoid",
          "int HALL_VAL = 0;",
          "int offset = 0;",
          "void setup() {",
          "  pinMode(RELAIS_PIN, OUTPUT);",
          "  pinMode(HALL_PIN, INPUT);",
          "  Serial.begin(57600);",
          "  Serial.println(\"Magnetic Levitation System START\");",
          "}",
          "void loop() {",
          "  HALL_VAL = analogRead(HALL_PIN);",
          "  if(HALL_VAL < (TRIGGER + offset)) {",
          "    digitalWrite(RELAIS_PIN, HIGH);",
          "    offset = HYST;",
          "  } else {",
          "    digitalWrite(RELAIS_PIN, LOW);",
          "    offset = -HYST;",
          "  }",
          "  delayMicroseconds(10);",
          "}"
        ]
      }
    ]
  },
  {
    slug: "4f8c2e",
    title: "Multi-Mode Motor Control Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description: "Flexible motor control system supporting DC, H-bridge, and sensorless BLDC operation using modular half-bridge drivers on Arduino.",
    longDescription: "Multi-mode motor control system using Infineon IFX007T half-bridge drivers. Supports half-bridge DC, full H-bridge bidirectional, and three-phase BLDC control. Includes both sensorless BLDC control via Back EMF (BEMF) and hall-sensor-based control for high-precision applications. Designed for flexible, modular control of multiple motors with efficient power handling and scalable driver abstraction.",
    tags: [
      "Motor Control",
      "BLDC",
      "H-Bridge",
      "Power Electronics",
      "Arduino",
      "Embedded Systems",
      "BEMF"
    ],
    icon: Gauge,
    highlight: "Motor Control",
    media: [
      { type: "image", src: "/images/_WSJLKa8SPT.jpg" }
    ],
    hidden: true,
    deliverables: [
      "Motor Control Firmware",
      "Multi-Mode Driver Configuration",
      "BLDC Control Implementation",
      "Hardware Integration Setup",
      "Motor Control Testing"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Flexible motor control system capable of driving DC and brushless motors using a modular half-bridge architecture. Demonstrates implementation of multiple motor control strategies on a single hardware platform."
      },
      {
        heading: "Driver Architecture",
        body: "System uses three IFX007T half-bridge drivers that can be combined for different motor topologies.",
        bullets: [
          "Each IFX007T operates as an independent half-bridge",
          "Three half-bridges enable multi-motor or BLDC configurations",
          "Drivers can form full H-bridge structures",
          "Supports unidirectional and bidirectional control"
        ],
        images: [
          "/images/possible_applications_2_UFUIo32qw7.jpg"
        ]
      },
      {
        heading: "DC Motor Control Modes",
        numbered: [
          {
            title: "Half-Bridge Mode",
            body: "Single-direction DC motor control with independent speed adjustment. Suitable for multi-channel unidirectional systems."
          },
          {
            title: "H-Bridge Mode",
            body: "Combining two half-bridges for bidirectional motor control with variable speed and direction."
          }
        ]
      },
      {
        heading: "BLDC Control",
        body: "Three-phase BLDC motor control using the three half-bridge drivers.",
        bullets: [
          "Sensorless BLDC control via Back EMF (BEMF)",
          "Automatic commutation using voltage feedback",
          "Hall sensors not required in BEMF mode",
          "Supports variable speed ramp-up and control"
        ]
      },
      {
        heading: "Hall Sensor Mode",
        body: "High-precision BLDC control using hall sensors.",
        bullets: [
          "Provides accurate rotor position feedback",
          "Improves low-speed stability and control",
          "Supports field weakening for higher speed operation"
        ],
        images: [
          "/images/terminals_kvuCFIpenj.jpg"
        ]
      },
      {
        heading: "Software Integration",
        body: "Arduino-based control with a driver library to simplify motor control for multiple topologies.",
        bullets: [
          "Library abstraction for motor control",
          "Example sketches for all configurations",
          "Tools for BLDC pole pair detection",
          "Supports multiple microcontroller platforms"
        ]
      },
      {
        heading: "Simulation & Validation",
        body: "Online simulation tools used to validate torque and behavior for all motor configurations.",
        images: [
          "/images/simulation_I03deKM54g.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates expertise in motor control systems, including multi-mode driver configuration, power stage design, and BLDC control. Highlights ability to integrate hardware abstraction with practical motor control applications."
      }
    ]
  },
  {
    slug: "e3b7c1",
    title: "Bluetooth-Enabled Multi-Channel LED Control Interface",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "pcb-hardware"],
    description: "Compact BLE-based lighting control module supporting PWM dimming, dynamic patterns, and mobile app integration.",
    longDescription: "This project demonstrates the integration and evaluation of a compact Bluetooth Low Energy (BLE) lighting control module for real-time LED control applications. The system enables wireless control of color, brightness, and dynamic lighting patterns through a mobile interface, supporting both iOS and Android platforms. The design focuses on low-power operation, high-frequency PWM control, and seamless user interaction, making it suitable for consumer lighting products and embedded IoT systems.",

    tags: [
      "BLE",
      "LED Control",
      "PWM",
      "Embedded Systems",
      "IoT",
      "Wireless Control",
      "Mobile Integration"
    ],

    icon: Wifi,
    highlight: "Wireless Lighting Control",

    media: [
      {
        type: "image",
        src: "/images/led_light.jpg"
      }
    ],


    hidden: true,

    deliverables: [
      "BLE-based LED control system",
      "Mobile app integration (iOS & Android)",
      "PWM-based brightness and color control",
      "Low-power embedded operation",
      "Custom PCB integration capability"
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Integrated a Bluetooth Low Energy lighting control module to enable wireless management of LED systems. The platform allows real-time control of brightness, color, and dynamic lighting effects through a mobile application interface."
      },

      {
        heading: "System Architecture",
        body:
          "The system combines wireless communication, embedded control, and LED driving into a compact and efficient platform.",
        bullets: [
          "BLE 4.0 communication for low-power wireless control",
          "Mobile application interface for real-time interaction",
          "PWM-based LED driving at 20 kHz for smooth dimming",
          "Support for customizable lighting patterns and effects"
        ]
      },

      {
        heading: "Electrical Characteristics",
        bullets: [
          "Operating voltage: 3.6V – 5V",
          "Operating current: ~15 mA",
          "Sleep current: ~2 µA",
          "PWM frequency: 20 kHz",
          "Wireless frequency: 2.4 GHz (BLE)"
        ]
      },

      {
        heading: "Control Features",
        body:
          "The module supports flexible and user-configurable lighting control through a mobile interface.",
        bullets: [
          "Full RGB color spectrum control",
          "Dynamic lighting patterns and animations",
          "Brightness adjustment via PWM",
          "Music-reactive lighting modes",
          "Cross-platform compatibility (iOS and Android)"
        ]
      },

      {
        heading: "Embedded Integration",
        body:
          "The module can be integrated into custom embedded designs and PCB systems for product-level deployment.",
        bullets: [
          "Micro-USB power interface",
          "Compact form factor (~50 mm)",
          "Easy integration with LED driver circuits",
          "Suitable for consumer and IoT lighting products"
        ],
        images: [
          "/images/led_light_control_bluetooth_module_for_ios_android_pinout_dJHunu5vLY.jpg",
          "/images/led_light_control_bluetooth_module_for_ios_android_schematics_JrmpwpgNge.jpg"
        ]
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates practical integration of BLE-based control into embedded lighting systems. It highlights experience in wireless communication, PWM-based LED control, and user interface integration for real-world IoT applications."
      }
    ]
  },
  {
    slug: "c8f3d9",
    title: "IoT-Enabled Remote Vehicle Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Remote-controlled vehicle with integrated sensors, global tracking, and cloud-based data access.",
    longDescription: "Mobile vehicle platform capable of remote operation, global positioning, and real-time sensor and camera data access. Integrates multiple microcontrollers, motor drivers, and cloud services for monitoring, navigation, and IoT capabilities. Designed for experimental, prototyping, and educational applications in robotics and embedded systems.",
    tags: ["Embedded Systems", "Firmware Development", "IoT", "Cloud Integration", "Sensors", "Motor Control", "Prototyping"],
    icon: Cpu,
    highlight: "Remote Vehicle Monitoring",
    hidden: true,
    media: [
      { type: "image", src: "/images/remote_car.jpg" }
    ],
    deliverables: [
      "Remote-controlled vehicle with multiple microcontrollers",
      "Sensor integration including GPS, ultrasonic, and camera",
      "Motor control using dual H-bridge drivers",
      "Cloud-based monitoring and dashboard access",
      "Battery-powered mobile platform for experimentation"
    ],
    sections: [
      {
        heading: "Hardware Components",
        bullets: [
          "Espressif ESP32 Cam Ai-thinker",
          "STMicroelectronics STM32F103C8",
          "NodeMCU ESP8266 Breakout Board",
          "SparkFun Dual H-Bridge Motor Driver L298",
          "u-blox Neo 6M GPS Module",
          "Ultrasonic Sensor HC-SR04",
          "DC Motors (12V) × 4",
          "Servo Motor",
          "Breadboard and jumper wires",
          "Chassis",
          "12V and 5V batteries"
        ]
      },
      {
        heading: "Software & Cloud Platforms",
        bullets: [
          "Arduino IDE",
          "Microsoft Azure",
          "Arduino IoT Cloud",
          "Arduino Web Editor"
        ]
      },
      {
        heading: "System Overview",
        body: "Platform supports remote control, global positioning, and live sensor and camera monitoring via cloud services. Mobile SIM connectivity enables monitoring in any coverage area.",
        bullets: [
          "Remote control and GPS tracking",
          "Global camera monitoring",
          "Cloud data access via SIM connection"
        ]
      },
      {
        heading: "Power and Wiring",
        body: "Separate batteries supply motors and microcontrollers to ensure stable operation under high current demands.",
        bullets: [
          "12V battery powers 4 DC motors and servo motor",
          "5V battery powers ESP32 Cam",
          "5V battery powers ESP8266 and STM32F103C8"
        ],
        images: [
          "/images/image_RKBMz3K29n.jpg"
        ]
      },
      {
        heading: "System Block Diagram",
        images: [
          "/images/image_PgDRP0hN7F.jpg"
        ]
      },
      {
        heading: "Video Demo",
        body: "Working demonstration available."
      }
    ]
  },
  {
    slug: "f5d9b8",
    title: "Real-Time Embedded Audio Visualization Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "hardware-design", "signal-processing"],
    description: "Embedded system to capture audio and display waveforms on a TFT display using a microcontroller and analog microphone input.",
    longDescription: "Embedded platform capturing audio signals through an electret microphone and plotting them on a TFT display in real time. Microcontroller digitizes analog signals and streams them via high-speed SPI to the display. Includes biasing, adjustable audio gain, and efficient data transfer for accurate real-time waveform visualization.",
    tags: ["Audio Processing", "Embedded Systems", "TFT Display", "Signal Visualization", "Microcontroller", "Arduino"],
    icon: Cpu,
    highlight: "Real-Time Audio Visualization",
    hidden: true,
    media: [
      { type: "image", src: "/images/spresense_lighter2_Uj3rX2jUJ7.jpg" }
    ],
    deliverables: [
      "Embedded audio visualization system",
      "Electret microphone input with biasing",
      "Real-time plotting on ST7735 TFT display",
      "Step-by-step Arduino IDE setup",
      "Professional-grade audio scope for microcontrollers"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "System captures audio signals using an embedded microcontroller and plots waveforms on a TFT display in real time."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "1.8 inch ST7735R SPI 128×160 TFT LCD Display Module",
          "Embedded microcontroller board with main & extension boards",
          "Male/Female Jumper Wires",
          "Adafruit Electret Microphone (20Hz–20kHz Omnidirectional)",
          "2.21kΩ Resistor for microphone biasing"
        ]
      },
      {
        heading: "Software Setup",
        bullets: [
          "Arduino IDE",
          "Embedded board package for Arduino IDE",
          "Audio scope source code with libraries and sketch"
        ]
      },
      {
        heading: "Microphone Configuration",
        body: "Electret microphone biasing achieved without soldering by connecting between BIAS and MIC_X pins. Only channel A is utilized.",
        images: [
          "/images/biasing_spresense_OqsGHQudNM.jpg"
        ]
      },
      {
        heading: "Microphone Gain Adjustment",
        body: "Gain is configurable via Audio.cpp in the Arduino library. Linux path: ~/.arduino15/packages/SPRESENSE/hardware/spresense/1.0.2/libraries/, Windows path: %userprofile%\\AppData\\Local\\Arduino15\\packages\\SPRESENSE\\hardware\\spresense\\1.0.2\\libraries/audio",
        code: [
          "init_mic_gain(input_device, 0)"
        ],
        images: [
          "/images/spresense_mic_nBa1pyEFWK.jpg"
        ]
      },
      {
        heading: "TFT Display Integration",
        body: "Display uses ST7735 controller with SPI interface. Reset and backlight connections are required. SPI frequency may be adjusted for long wires. Drivers ported from Adafruit TFT library v1.0.6."
      },
      {
        heading: "Code and Setup Instructions",
        body: "Main sketch fetches audio data stream via audio library and plots on TFT. WAV codec required.\nSteps:\n1. Install Arduino IDE and Spresense package\n2. Flash bootloader if needed\n3. Fetch source code from GitHub\n4. Install TFT drivers via Arduino IDE\n5. Open sketch and upload\n6. Observe audio waveform on display"
      },
      {
        heading: "Schematics",
        images: [
          "/images/schematics2.jpg"
        ]
      }
    ]
  },
  {
    slug: "f2b8d6",
    title: "Compact High-Power Induction Heating System",
    category: "Hardware Design",
    filterSlugs: ["hardware-design", "power-electronics", "prototyping"],
    description: "Compact induction heating device for rapid ferrous metal heating using high-power MOSFET circuits and custom-wound inductors.",
    longDescription: "Compact high-power induction heater leveraging MOSFETs, high-voltage capacitors, and custom-wound copper coils to rapidly heat ferrous metals. System demonstrates professional-level power electronics design in a small form factor. Aluminum requires additional voltage and cooling considerations for effective heating.",
    tags: ["Power Electronics", "Induction Heating", "DIY", "MOSFETs", "Capacitors", "Hardware Design"],
    icon: Zap,
    highlight: "Compact High-Power Induction Heater",
    hidden: true,
    media: [
      { type: "image", src: "/images/a27d24_8e327d29eab04ff3a6eeb7414e9abfb1mv2-1_XoMq1HJvx7.jpg" }
    ],
    deliverables: [
      "Compact induction heater with custom coil",
      "High-power MOSFET circuit design",
      "Capacitor-based resonant tank",
      "Rapid ferrous metal heating",
      "Professional DIY hardware design"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Induction heating uses electromagnetic induction to generate eddy currents in metals, producing heat as the metal passes through a coil. Common in industrial furnaces and welding, this method is also applied in compact DIY systems for efficient metal heating."
      },
      {
        heading: "Design Details",
        body: "Device is compact, approximately the size of a small shoebox. Features include IRFP4668PBF MOSFETs, ceramic and WIMA capacitors, FR307 fast diodes, metal oxide resistors, Zener diodes, and custom-wound inductors made with 1.25mm enamel-insulated copper wire around an iron powder toroid (~100µH).",
        images: [
          "/images/a27d24_3625bb9327074721ac2353edb52b6cd9mv2_NwcN123Q5s.jpg"
        ]
      },
      {
        heading: "Performance & Considerations",
        body: "System efficiently heats ferrous metals. Heating aluminum requires higher voltages and additional thermal management. Water-cooling could enhance performance for non-ferrous metals, and future iterations may integrate active cooling systems."
      }
    ]
  },
  {
    slug: "f1c7d9",
    title: "Battery-Powered Pan-Tilt Camera System",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Battery-powered pan-and-tilt camera platform with embedded firmware for remote control and live video streaming via mobile application.",
    longDescription: "Compact pan-and-tilt camera platform controlled remotely via ESP32-based embedded microcontroller. Integrates servo control, battery operation, and real-time video streaming. Provides an IoT-ready solution for remote monitoring and embedded vision applications.",
    tags: ["Embedded Systems", "Camera", "Servo Control", "IoT", "Remote Monitoring", "Battery Powered"],
    icon: Camera,
    highlight: "Remote Pan-Tilt Camera",
    hidden: true,
    media: [
      { type: "image", src: "/images/img_7275_RTwPpDdtHZ.jpg" }
    ],
    deliverables: [
      "Pan-and-tilt camera platform",
      "Embedded firmware for ESP32 boards",
      "Battery-powered operation",
      "Integration with mobile app for live viewing",
      "Real-time video streaming and servo control"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Pan-and-tilt camera platform controlled remotely via mobile application, providing a compact solution for real-time monitoring and embedded vision tasks."
      },
      {
        heading: "Components",
        bullets: [
          "ESP32-CAM module",
          "FT232RL FTDI Mini USB",
          "18650 Battery Holder ×1",
          "18650 Batteries ×2",
          "Mini Pan/Tilt Platform with 2 SG-90 Servos",
          "MB102 Breadboard Power Supply Module",
          "iRobbie-A mobile app"
        ],
        images: [
          "/images/img_7279_YxIsjWue77.jpg",
          "/images/img_7280_LFUassZrST.jpg",
          "/images/9887551581810078359.jpg"
        ]
      },
      {
        heading: "Hardware Setup",
        body: "Connect ESP32-CAM to pan-and-tilt platform. Power with 18650 batteries: Tilt servo → IO2, Pan servo → IO14. MB102 module provides regulated voltage for embedded electronics."
      },
      {
        heading: "Firmware Setup",
        code: [
          "/*\nESP32-CAM Remote Control \n*/\n\nconst char* ssid = \"WIFI_Network\";\nconst char* password = \"Password\";\n\n#include \"esp_wifi.h\"\n#include \"esp_camera.h\"\n#include <WiFi.h>\n#include \"soc/soc.h\"\n#include \"soc/rtc_cntl_reg.h\"\n// ... rest of code as in HTML"
        ],
        body: "Upload firmware using Arduino IDE. Hold GPIO0 to GND during upload, then release. Use Serial Monitor to obtain the assigned IP address."
      },
      {
        heading: "Final Steps",
        body: "Mount ESP32-CAM onto pan-and-tilt platform, power on, and control remotely via mobile application. Configure router port forwarding if remote network access is required."
      },
      {
        heading: "Conclusion",
        bullets: [
          "Reliable remote camera monitoring",
          "Battery-powered pan-and-tilt operation",
          "Mobile app integration for live video viewing",
          "Compact embedded vision solution"
        ]
      },
      {
        heading: "Schematics",
        images: [
          "/images/esp32-cam_cam_bb_G5ElZHG825.jpg"
        ]
      }
    ]
  },
  {
    slug: "f3d9c2",
    title: "IoT-Enabled Compact Camera Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Small embedded camera module with pan-and-tilt control and real-time streaming over mobile application.",
    longDescription: "Compact camera platform for remote operation via internet. Integrates microcontroller firmware with pan-and-tilt hardware to provide real-time image streaming. Suitable for IoT monitoring, embedded vision, and small-scale remote surveillance applications.",
    tags: ["Embedded Systems", "Camera", "IoT", "Remote Monitoring", "Servo Control", "Wi-Fi", "Microcontroller"],
    icon: Camera,
    highlight: "Remote Embedded Camera",
    hidden: true,
    media: [
      { type: "image", src: "/images/esp-eye-1-1317x800_mD2IVcBoSI.jpg" }
    ],
    deliverables: [
      "Compact remote camera platform",
      "Firmware for ESP32 microcontroller",
      "Pan-and-tilt control integration",
      "Battery-powered with mobile app access",
      "Real-time image streaming"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Small remotely accessible camera platform streaming images to mobile application, integrating microcontroller firmware with pan-and-tilt hardware for flexible viewing angles."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "ESP32-EYE or ESP32-CAM module",
          "FT232RL FTDI Mini USB",
          "18650 Battery Holder ×1",
          "18650 Batteries ×2",
          "Mini Pan/Tilt Platform with 2 SG-90 Servos",
          "MB102 Breadboard Power Supply Module",
          "Mobile app for control"
        ],
        images: [
          "/images/nabto_firewall_flow-1_KznIRDn2vO.jpg",
          "/images/m5stack_zvAf5ZkKMW.jpg",
          "/images/esp-eye_5n07I27aUr.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "Streams images over a P2P tunnel, allowing the client app to access the camera web server securely and with low latency."
      },
      {
        heading: "Firmware & Setup",
        code: [
          "$ cd nabto-esp32cam",
          "$ make menuconfig",
          "$ make -j 4",
          "$ make flash",
          "$ make monitor"
        ],
        body: "Configure Wi-Fi credentials, device ID, and key. Flash firmware to the camera module. Verify Nabto state reaches ATTACHED for remote connectivity."
      },
      {
        heading: "Operation",
        body: "Attach camera to pan-and-tilt platform, power on, and control remotely via mobile application. Configure port forwarding for external network access if required."
      },
      {
        heading: "Schematics",
        images: [
          "/images/esp32-cam_cam_bb_G5ElZHG825.jpg"
        ]
      },
      {
        heading: "Code Snippets",
        code: [
          "/*\nESP32-CAM Remote Control \n*/\nconst char* ssid = \"WIFI_Network\";\nconst char* password = \"password\";\n#include \"esp_wifi.h\"\n#include \"esp_camera.h\"\n#include <WiFi.h>\n#include \"soc/soc.h\"\n#include \"soc/rtc_cntl_reg.h\"\n// ... rest of code as in HTML"
        ]
      }
    ]
  },
  {
    slug: "w7d3e2", // new unique hex slug
    title: "Autonomous IoT Water Level Monitoring & Control System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "sensor-integration"],
    description: "ESP32-based water level monitoring system with ultrasonic sensing, automated motor control, and real-time cloud updates via Blynk.",
    longDescription: "This project demonstrates a compact and reliable embedded IoT platform for real-time water tank monitoring and control. Using an ESP32 microcontroller with an HC-SR04 ultrasonic sensor, the system continuously measures water levels, calculates percentages, and updates a Blynk dashboard in real time. Optional relay integration allows automated motor control to prevent overflow. The design emphasizes robustness, low power consumption, and ease of deployment in household or small-scale commercial environments.",
    tags: [
      "ESP32",
      "IoT",
      "Ultrasonic Sensor",
      "Water Level Monitoring",
      "Embedded Systems",
      "Blynk",
      "Automation"
    ],
    icon: Activity,
    highlight: "Autonomous Water Level Control",
    hidden: true,
    media: [
      { type: "image", src: "/images/_N544nvpBYs.jpg" }
    ],
    deliverables: [
      "ESP32 firmware for water level acquisition",
      "Ultrasonic sensor integration",
      "Blynk cloud dashboard for real-time monitoring",
      "Optional relay-controlled motor automation",
      "Simulation-ready setup and calibration"
    ],
    sections: [
      {
        heading: "System Overview",
        body: "The system monitors water levels in real time using an ESP32 and an HC-SR04 ultrasonic sensor, providing cloud visualization and optional automatic motor control to prevent overflow."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "ESP32 Wi-Fi enabled microcontroller",
          "HC-SR04 Ultrasonic Distance Sensor",
          "Relay module for motor control (optional)",
          "Standard breadboard and jumper wires",
          "12V/5V water pump and power supply"
        ]
      },
      {
        heading: "Software Stack",
        bullets: [
          "Arduino IDE for firmware development",
          "Blynk IoT platform for cloud dashboard",
          "Serial Monitor for real-time debugging"
        ],
      },
      {
        heading: "Sensor Placement & Data Acquisition",
        body: "The ultrasonic sensor is mounted on the top of the water tank, facing downward. Distance measurements are converted into water height and percentage of tank filled.",
        bullets: [
          "Distance = time-of-flight * speed of sound / 2",
          "Water level = tank height - measured distance",
          "Percentage = (water level / tank height) * 100"
        ]
      },
      {
        heading: "Blynk Dashboard Configuration",
        body: "Water level and percentage values are transmitted to Blynk every second. Real-time notifications alert when tank is full or low.",
        bullets: [
          "Gauge for water level in cm",
          "Gauge for water percentage",
          "Threshold alerts: full (≥95%), low (≤10%)",
          "Optional push notifications for motor ON/OFF"
        ]
      },
      {
        heading: "Motor Automation",
        body: "A relay module can be integrated to automatically switch the water pump based on measured tank levels."
      },
      {
        heading: "Firmware Implementation",
        code: [
          "/************* Smart Water Level Monitoring System *************",
          "Hardware: ESP32, HC-SR04 Ultrasonic Sensor, Blynk App",
          "Features:",
          "✔ Measure water level in tank",
          "✔ Send percentage to Blynk App",
          "✔ Show water level on Serial Monitor",
          "✔ Automatically detect tank full or empty",
          "✔ Motor control via relay",
          "****************************************************************/",
          "#define BLYNK_TEMPLATE_ID \"Template_ID\"",
          "#define BLYNK_TEMPLATE_NAME \"Water Level Monitor\"",
          "#define BLYNK_AUTH_TOKEN \"Blynk_Auth_Token\"",
          "#include <WiFi.h>",
          "#include <WiFiClient.h>",
          "#include <BlynkSimpleEsp32.h>",
          "char ssid[] = \"WiFi_Name\";",
          "char pass[] = \"WiFi_Password\";",
          "#define TRIG_PIN 5",
          "#define ECHO_PIN 18",
          "const int TANK_DEPTH = 100;",
          "long duration;",
          "float distance, waterLevel, waterPercent;",
          "BlynkTimer timer;",
          "void measureWaterLevel() { /* Ultrasonic measurement & Blynk update */ }",
          "void setup() { Serial.begin(115200); /* Initialize pins, Blynk, timer */ }",
          "void loop() { Blynk.run(); timer.run(); }"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "The project demonstrates end-to-end IoT integration for environmental monitoring and automation. It highlights skills in embedded firmware, sensor integration, real-time cloud data handling, and optional actuator control for autonomous operation."
      }
    ]
  },
  {
    slug: "1a7e5c",
    title: "WiFi-Enabled Browser-Controlled Robotic Platform",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "Browser-controlled robotic car using ESP8266 access point, embedded web server, and serial communication with motor controller.",
    longDescription: "WiFi-enabled robotic car integrating an ATmega328-based motor controller with an ESP8266 acting as wireless access point and embedded web server. Browser-based interface enables real-time directional and speed control. Architecture separates networking logic from motor control, allowing modular firmware design. Integrates motor driver hardware, embedded web UI, and communication protocols for a complete real-time control system.",
    tags: [
      "ESP8266",
      "Arduino",
      "IoT",
      "Web Server",
      "Motor Control",
      "Embedded Systems",
      "WiFi"
    ],
    icon: Wifi,
    highlight: "Web Robotics",
    media: [
      { type: "image", src: "/images/img_3641_4IliUhwScq.jpg" }
    ],
    hidden: true,
    deliverables: [
      "Embedded Web Server (ESP8266)",
      "HTML Control Interface",
      "Motor Control Firmware",
      "Serial Communication Protocol",
      "WiFi-Based Control System"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Browser-controlled robotic platform combining embedded web server and microcontroller-based motor control. Architecture separates networking and control for modular system design.",
        images: [
          "/images/_QKeZ6HTyI8.jpg"
        ]
      },
      {
        heading: "System Architecture",
        body: "Integration of networking, control, and actuation layers into a unified workflow.",
        bullets: [
          "ESP8266 acts as WiFi access point and HTTP server",
          "Client devices connect via browser",
          "HTTP GET/POST commands for control",
          "Serial communication between ESP8266 and ATmega328",
          "Motor control handled independently by Arduino firmware"
        ],
        images: [
          "/images/blockflowdiagram_bzUtPAh7mM.jpg"
        ]
      },
      {
        heading: "Hardware System",
        body: "Embedded hardware integrates motor drivers, controllers, and battery management for mobile operation.",
        bullets: [
          "ATmega328 handles real-time motor control",
          "L298 H-bridge driver controls dual DC motors",
          "ESP8266 provides wireless communication",
          "Battery-powered with Li-ion cells",
          "Optional encoder modules for feedback"
        ],
        images: [
          "/images/img_3643_8OTJsTlsBu.jpg",
          "/images/schematicdiagram_Gy4WnIxRhh.jpg"
        ]
      },
      {
        heading: "Embedded Networking",
        body: "ESP8266 configured as standalone access point with DNS and HTTP server.",
        bullets: [
          "SoftAP mode for dedicated wireless network",
          "mDNS allows local URL access (esp8266.local)",
          "HTTP server handles control commands",
          "SPIFFS stores and serves HTML interface"
        ]
      },
      {
        heading: "Web Interface",
        body: "Browser-based UI provides real-time control without a dedicated mobile app.",
        bullets: [
          "Directional buttons (FWD, LEFT, RIGHT, BACK)",
          "Speed control via slider",
          "GET requests for motion commands",
          "POST requests for speed adjustment",
          "Visual feedback through button states"
        ],
        images: [
          "/images/htmlpage_qyEt6qTHNG.jpg"
        ]
      },
      {
        heading: "Control Protocol",
        body: "Lightweight serial protocol separates networking from motor control.",
        bullets: [
          "Single-character commands for motion control",
          "Speed transmitted as formatted strings",
          "ATmega328 interprets commands and drives motors",
          "PWM used for speed control via L298 driver"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates complete embedded system integrating networking, control, and actuation. Highlights expertise in embedded web servers, real-time control systems, communication protocols, and hardware/software co-design for interactive IoT platforms."
      }
    ]
  },
  {
    slug: "b2e9f6",
    title: "Embedded Event-Driven Vision Platform",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description: "Embedded real-time vision system with object-triggered image capture and Ethernet-based streaming interface.",
    longDescription: "Embedded vision system detecting objects in real time and capturing images automatically upon detection. Integrates ultrasonic sensing, camera acquisition, and Ethernet-based communication to deliver images via a microcontroller-hosted web interface. Optimized for low-latency event detection, efficient memory management, and lightweight HTTP serving in constrained environments.",
    tags: [
      "Embedded Systems",
      "Computer Vision",
      "IoT",
      "Ethernet",
      "Real-Time Systems",
      "Networking",
      "Microcontrollers"
    ],
    icon: Camera,
    highlight: "Embedded Vision System",
    media: [
      { type: "image", src: "/images/camera_robot.jpg" }
    ],
    hidden: true,
    deliverables: [
      "Object Detection Trigger System",
      "Embedded Camera Integration",
      "Ethernet-Based Web Server",
      "Real-Time Image Streaming",
      "Memory-Optimized Firmware"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Embedded vision system capable of detecting objects and capturing images automatically, providing a real-time web interface for remote monitoring without external servers."
      },
      {
        heading: "System Architecture",
        body: "Integration of sensing, image acquisition, and network communication in a single embedded platform.",
        bullets: [
          "Ultrasonic-based object detection",
          "Camera module for image capture",
          "Embedded HTTP server for web interface",
          "Ethernet-based communication for reliability"
        ],
        images: [
          "/images/circuit_diagram_58vnMDGQPz.jpg",
          "/images/components_needed_iosE06MSPQ.jpg"
        ]
      },
      {
        heading: "Object Detection & Trigger Logic",
        body: "Continuously measures distance and triggers image capture when objects enter a defined proximity.",
        bullets: [
          "Ultrasonic distance measurement (2–400 cm)",
          "Detection threshold (~20 cm)",
          "Cooldown mechanism to prevent repeated captures",
          "Event-driven processing loop"
        ]
      },
      {
        heading: "Image Capture Pipeline",
        body: "Efficiently processes and stores captured images within constrained memory limits.",
        bullets: [
          "JPEG image capture using camera module",
          "Validation with JPEG header markers",
          "Buffered storage (~40 KB frame buffer)",
          "Dynamic memory management and cleanup"
        ]
      },
      {
        heading: "Embedded Web Server",
        body: "Lightweight HTTP server hosted on the microcontroller to serve images and data.",
        bullets: [
          "Custom HTTP response handling",
          "Dynamic HTML page generation",
          "Auto-refresh web interface",
          "Image endpoint for real-time streaming"
        ]
      },
      {
        heading: "Networking & Data Handling",
        body: "Efficient communication and transmission techniques for reliable image delivery.",
        bullets: [
          "Ethernet communication using WIZnet stack",
          "DHCP-based IP assignment",
          "Chunked image transmission (2048-byte segments)",
          "Connection handling and resource cleanup"
        ]
      },
      {
        heading: "Firmware Design",
        body: "Real-time, resource-efficient firmware for event-driven image capture and networking.",
        bullets: [
          "Event-driven main loop architecture",
          "Non-blocking network handling",
          "Periodic DHCP maintenance",
          "Garbage collection for memory optimization"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates advanced embedded system design combining real-time sensing, image processing, and low-level networking. Highlights capability to build efficient, standalone vision systems providing responsive monitoring in constrained environments."
      }
    ]
  },
  {
    slug: "d4a1f7",
    title: "FPGA-Based Software-Defined Radio Platform",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-firmware", "iot-connected-devices"],
    description: "Practical exploration of software-defined radio using FPGA platforms and GNU Radio for signal processing and RF experimentation.",
    longDescription: "Hands-on introduction to software-defined radio (SDR) using FPGA-based hardware. Utilizes Ettus USRP B206mini and GNU Radio to perform radio signal reception, FM receiver implementation, and real-time signal visualization. Focuses on practical SDR experimentation and FPGA RF frontends, highlighting technical proficiency in embedded RF systems and signal processing.",
    tags: ["SDR", "FPGA", "Radio", "GNU Radio", "Embedded Systems", "RF", "Signal Processing"],
    icon: Radio,
    highlight: "FPGA-Based SDR Experiments",
    hidden: true,
    media: [
      { type: "image", src: "/images/project2.jpg" }
    ],
    deliverables: [
      "Comprehensive USRP B206mini setup guide",
      "GNU Radio SDR workflow",
      "FM receiver and signal processing examples",
      "Hands-on RF signal capture and visualization pipeline",
      "Professional-level SDR experimentation experience"
    ],
    sections: [
      {
        heading: "Introduction",
        body: "FPGA platforms provide an excellent environment for exploring software-defined radio. Prebuilt development boards, such as Analog Devices FMC cards or Ettus Research USRPs, are used to facilitate practical RF experimentation and learning."
      },
      {
        heading: "Previous SDR Workflows",
        body: "Earlier projects using USRP B205mini with GNU Radio introduced SDR fundamentals, including matched filtering and simple FM receiver design."
      },
      {
        heading: "About the USRP B206mini",
        body: "USRP B206mini is part of Ettus' B200 series, offering a compact, business-card-sized platform. It is a refreshed version of the B200mini and B205mini devices, providing enhanced USB-C connectivity and a fully capable RF front-end."
        ,
        images: [
          "/images/screenshot_2025-11-02_at_9_39_56pm_5hTtqpyV1l.jpg",
          "/images/screenshot_2025-11-02_at_9_40_33pm_KpaR28d5hO.jpg"
        ]
      },
      {
        heading: "Core Hardware",
        body: "The B206mini integrates an AMD Spartan FPGA with the Analog Devices AD9364 RF transceiver. Internal programmable filters can be configured via SPI. This platform supports high-level SDR experimentation and is compatible with UHD drivers and GNU Radio workflows.",
        images: [
          "/images/screenshot_2025-11-02_at_9_38_09pm_81q4HiLniz.jpg",
          "/images/screenshot_2025-11-02_at_9_41_39pm_Pt9MoVDmDI.jpg",
          "/images/screenshot_2025-11-02_at_9_43_56pm_In1P4Kid2r.jpg"
        ],
        code: [
          "~$ sudo add-apt-repository ppa:gnuradio/gnuradio-releases",
          "~$ apt list --all-versions gnuradio",
          "~$ sudo apt-get install gnuradio=3.10.12.0-2~noble1"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates hands-on experience with FPGA-based SDR hardware, GNU Radio workflows, and practical RF experimentation. Provides foundational skills suitable for embedded RF system design and signal processing applications."
      }
    ]
  },
  {
    slug: "d6f1b2", // new unique hex slug
    title: "IoT Asset Location & Environmental Tracking System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "hardware-design"],
    description: "Battery-powered IoT tracker capturing GPS location, motion, and environmental data with cloud visualization and low-power operation.",
    longDescription: "Developed a portable asset tracking system using a cellular IoT module with integrated GPS and motion sensing. The system transmits real-time data to a cloud dashboard via a lightweight HTTP pipeline, providing geolocation, motion detection, and environmental monitoring. Designed for low-power operation, the tracker ensures reliable data logging during mobile use, with periodic synchronization for battery efficiency.",
    tags: ["IoT", "GPS Tracking", "Embedded Systems", "Cloud Integration", "Low-Power Design", "Asset Monitoring", "Real-Time Data"],
    icon: Activity,
    highlight: "Mobile Asset Monitoring",
    hidden: true,
    media: [
      { type: "image", src: "/images/_tdTrgmXb44.jpg" }
    ],
    deliverables: [
      "Portable asset tracking module",
      "GPS and motion data acquisition",
      "Periodic cloud synchronization via HTTP",
      "Low-power battery operation",
      "Cloud dashboard visualization with maps and telemetry"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "A portable IoT tracker for real-time monitoring of assets, capable of capturing GPS location, motion, and environmental parameters while operating efficiently on battery power."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "Blues Wireless Notecarrier-AF cellular IoT module",
          "LiPo Battery (3.7V, 2500mAh) with JST connector",
          "Optional solar charging interface",
          "Adafruit Feather ESP32 removed to optimize power usage"
        ],
        images: [
          "/images/robin-glauser-zp7x_b86xog-unsplash_ROAOHnulcP.jpg"
        ]
      },
      {
        heading: "Software & Cloud Integration",
        body: "The Notecarrier-AF transmits location and motion data to a cloud service via HTTP. A lightweight cloud dashboard interprets the incoming JSON data and visualizes asset position and telemetry.",
        bullets: [
          "Periodic mode with movement detection to conserve battery",
          "JSON-based data structure for GPS, motion, and time",
          "HTTP route configured to Datacake for dashboard visualization",
          "Dashboard includes interactive map and chart widgets"
        ]
      },
      {
        heading: "Tracker Configuration",
        code: [
          "{ \"req\": \"card.restore\", \"delete\": true }",
          "{ \"req\": \"hub.set\", \"mode\": \"periodic\", \"product\": \"[DEVICE_UID]\", \"outbound\": 60, \"inbound\": 720 }",
          "{ \"req\": \"card.location.mode\", \"mode\": \"periodic\", \"seconds\": 3600 }",
          "{ \"req\": \"card.location.track\", \"start\": true, \"heartbeat\": true, \"hours\": 12 }"
        ],
        body: "Configured the Notecarrier to periodically report GPS location, motion, and telemetry while conserving battery life. Heartbeat ensures tracking continues even if the asset remains stationary."
      },
      {
        heading: "Cloud Data Decoding",
        code: [
          "function Decoder(request) {",
          "  var data = JSON.parse(request.body);",
          "  var device = data.device;",
          "  var decoded = {};",
          "  decoded.temp = data.body.temperature;",
          "  decoded.motion = data.body.motion || 0;",
          "  decoded.location = '(' + data.where_lat + ',' + data.where_lon + ')';",
          "  decoded.time = data.when;",
          "  return [",
          "    { device: device, field: 'TEMP', value: decoded.temp },",
          "    { device: device, field: 'MOTION', value: decoded.motion },",
          "    { device: device, field: 'LOCATION', value: decoded.location },",
          "    { device: device, field: 'TIME', value: decoded.time }",
          "  ];",
          "}"
        ],
        body: "Decoder function processes JSON payload from the Notecarrier and extracts temperature, motion, location, and timestamp for visualization."
      },
      {
        heading: "Dashboard Visualization",
        body: "The processed data is displayed on an interactive dashboard. Map and chart widgets allow real-time tracking and telemetry visualization of moving assets.",
      },
      {
        heading: "Engineering Outcome",
        body: "The project demonstrates real-time IoT asset tracking with cloud integration and low-power embedded operation. It highlights expertise in microcontroller configuration, GPS telemetry, cloud-based visualization, and battery-efficient design suitable for professional IoT deployments."
      }
    ]
  },
  {
    slug: "h7f3c9", // new unique hex slug
    title: "Real-Time LiPo Battery Charging Monitor",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Battery-powered LiPo charging system with real-time voltage, current, load monitoring, and cloud visualization using OLED and IoT integration.",
    longDescription: "Developed a 3.7V LiPo battery monitoring system using an ESP8266-01, INA219 current sensor, and OLED display. The system tracks charge current, bus and load voltages, and elapsed charging time in real time, while sending data to a cloud dashboard for remote monitoring. The project emphasizes low-latency acquisition, reliable sensor integration, and professional-level visualization of battery telemetry.",
    tags: ["ESP8266", "LiPo Battery", "Blynk", "IoT", "Current Monitoring", "Voltage Monitoring", "Embedded Systems", "OLED Display"],
    icon: Activity,
    highlight: "LiPo Charging Telemetry",
    hidden: true,
    media: [
      { type: "image", src: "/images/photo_dec_08_1_11_42_pm_oL1nccHpbX.jpg" }
    ],
    deliverables: [
      "LiPo charging monitor hardware integration",
      "INA219 current and voltage acquisition",
      "OLED real-time display for charge metrics",
      "Blynk-based cloud telemetry and dashboard",
      "Arduino firmware for data acquisition and communication"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "A professional-grade LiPo battery monitor that acquires voltage, current, and load information, displaying it locally on an OLED screen and remotely via cloud dashboards for live monitoring."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "ESP8266-01 microcontroller",
          "INA219 DC current/voltage sensor",
          "Basic 1.0A DC LiPo Charger",
          "3.3V voltage regulator",
          "220 µF capacitor",
          "OLED I2C display 1.3\""
        ],
      },
      {
        heading: "Software & Cloud Integration",
        bullets: [
          "Arduino IDE for firmware development",
          "Blynk app for cloud monitoring and visualization"
        ],
      },
      {
        heading: "System Operation",
        body: "The system continuously measures charge current, bus and load voltages, and cumulative charging time. Data is displayed on the OLED and transmitted to Blynk virtual pins for cloud visualization. The firmware includes averaging for stable readings and automatic time tracking.",
        images: [
          "/images/dccharger_schem_N7o9cW3jOd.jpg"
        ]
      },
      {
        heading: "Firmware Features",
        code: [
          "// Initialize INA219 sensor and OLED display\nina219.begin();\nu8g2.begin();\nBlynk.begin(auth, ssid, pass);\n// Main loop collects and averages voltage/current, updates display, sends to Blynk"
        ],
        body: "The firmware performs high-resolution ADC reads from the HX711/INA219, computes average values, updates the OLED display, and writes telemetry to Blynk cloud in real time. Automatic start/stop tracking is included for charging session timing."
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates integration of embedded microcontrollers, precision sensing, real-time display, and cloud telemetry. Highlights expertise in battery monitoring, low-power IoT design, and professional data visualization suitable for senior-level embedded projects."
      }
    ]
  },
  {
    slug: "g7e5f1", // new unique hex slug
    title: "Cellular IoT GPS Tracking & Telemetry System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware", "gps-tracking"],
    description: "GPS-based vehicle telemetry system using SIM7000 LTE shield and Arduino, with real-time cloud data visualization on ThingsBoard.",
    longDescription: "Developed a professional-grade GPS tracking and telemetry system using Arduino and the SIM7000 LTE shield. The system captures real-time location, speed, heading, altitude, temperature, and battery status, and posts the data to a cloud platform (ThingsBoard) for visualization and monitoring. The architecture supports LTE CAT-M1/NB-IoT connectivity, serial interfacing with the Arduino, and a modular cloud dashboard for real-time analytics.",
    tags: ["GPS", "IoT", "LTE", "Arduino", "Telemetry", "Embedded Systems", "Cloud Integration"],
    icon: Wifi,
    highlight: "Cellular GPS IoT Platform",
    hidden: true,
    media: [
      { type: "image", src: "/images/gps_tracker_tutorial_cover_image_2_UVQc1EUY7m.jpg" }
    ],
    deliverables: [
      "GPS data acquisition via SIM7000 LTE shield",
      "Serial communication with Arduino for sensor integration",
      "Real-time cloud posting using HTTP POST or MQTT",
      "ThingsBoard dashboard visualization setup",
      "Modular architecture supporting multiple vehicles and sensors"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "The system captures GPS, speed, heading, altitude, temperature, and battery status from a vehicle and posts it to a cloud platform for real-time monitoring. The design leverages LTE connectivity for reliable cellular communication, making it suitable for mobile telemetry applications.",
      },
      {
        heading: "Hardware Components",
        bullets: [
          "Arduino Uno / Mega / Leonardo",
          "Botletics SIM7000 LTE Shield with GNSS antenna",
          "Hologram Global SIM Card",
          "5V USB adapter or LiPo battery for power",
          "Optional car USB adapter for mobile power"
        ],
      },
      {
        heading: "System Setup & Assembly",
        body: "Stack the SIM7000 LTE shield onto the Arduino, insert the SIM card with correct orientation, and attach LTE/GNSS antennas. Ensure the power LED on the shield can be activated via the PWRKEY pulse sequence before proceeding with firmware upload.",
        images: [
          "/images/sim_card_insertion_v5_G6ve12IWZH.jpg"
        ]
      },
      {
        heading: "Arduino Firmware Configuration",
        body: "Upload the provided IoT example sketch. Configure the communication protocol (HTTP GET/POST or MQTT) and sampling rate. The shield automatically retrieves the unique IMEI number for device identification. Serial monitor output confirms connectivity and GPS lock.",
        code: [
          "// Define data transfer protocol",
          "#define PROTOCOL_HTTP_GET",
          "// #define PROTOCOL_MQTT_AIO",
          "// #define PROTOCOL_MQTT_CLOUDMQTT",
          "// Set sampling rate in seconds",
          "#define samplingRate 30"
        ]
      },
      {
        heading: "Cloud Data Integration",
        body: "Configure ThingsBoard IoT platform: create device, copy access token, and connect Arduino telemetry output to cloud endpoint. Data includes latitude, longitude, speed, heading, altitude, temperature, and battery voltage.",
        images: [
          "/images/freeboard_final_dashboard_fZqyjcJVCT.jpg"
        ]
      },
      {
        heading: "Dashboard Configuration",
        body: "Create widgets in the cloud dashboard to visualize GPS coordinates, speed, heading, altitude, temperature, and battery status. Utilize map widgets for location tracking and gauge/graph widgets for telemetry metrics."
      },
      {
        heading: "Testing & Validation",
        body: "Conduct on-road or mobile testing with the Arduino + LTE shield system. Adjust sampling rate as needed for resolution. Confirm data integrity on ThingsBoard dashboard. Verify GPS lock, telemetry frequency, and real-time updates.",
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates integration of embedded microcontrollers, LTE-based cellular communication, GPS telemetry, and cloud dashboards. Highlights expertise in IoT data acquisition, real-time monitoring, and modular firmware design for vehicle-based telemetry applications."
      }
    ]
  },
  {
    slug: "a8c3f3",
    title: "Automated Moisture-Controlled Ventilation System",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "hardware-design", "iot-connected-devices"],
    description: "Intelligent ventilation system for basements and crawlspaces, controlling humidity and optimizing energy use via embedded sensors and fan automation.",
    longDescription: "Embedded Arduino Nano-based system using IO expanders, temperature and humidity sensors, and relay-controlled fans to regulate airflow. Monitors indoor and outdoor conditions, automatically adjusts fan operation, and provides effective humidity reduction while optimizing energy consumption.",
    tags: ["Embedded Systems", "Arduino", "IoT", "HVAC", "Humidity Control", "Sensors"],
    icon: Cloud,
    highlight: "Automated Basement Ventilation",
    hidden: true,
    media: [
      { type: "image", src: "/images/blob_sVsyiyTWwd.jpg" }
    ],
    deliverables: [
      "Arduino-based automated ventilation system",
      "Humidity and temperature monitoring with IO expanders",
      "Relay-controlled fans for air circulation",
      "Step-by-step assembly and wiring instructions",
      "Reliable performance and energy efficiency"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Automated system to reduce moisture levels in basements or crawlspaces, preventing mildew formation and improving energy efficiency for heating and cooling."
      },
      {
        heading: "Components & Tools",
        bullets: [
          "Arduino Nano R3 ×1",
          "IO Expander ×1",
          "IO Expander Bundle ×1"
        ]
      },
      {
        heading: "Software Tools",
        bullets: [
          "Arduino IDE"
        ]
      },
      {
        heading: "System Features",
        bullets: [
          "Indoor and outdoor temperature and humidity sensors",
          "Smart ventilation fan control based on moisture comparison",
          "Reduces basement/crawlspace humidity",
          "Minimizes mildew growth",
          "Energy-efficient ventilation control"
        ],
        images: [
          "/images/parts_c3oJ7zYnsh.jpg"
        ]
      },
      {
        heading: "Assembly & Wiring",
        body: "Instructions for mounting fans, connecting sensors, routing wiring, and configuring the Arduino Nano. Includes waterproof gland installation, keystone jack mounting, and airflow setup.",
        images: [
          "/images/arduino_bk8kMRARsy.jpg",
          "/images/fans_rtfTy62XFC.jpg",
          "/images/enclosure_A2Cz6f0qVb.jpg",
          "/images/wire_cMuf8bLq7R.jpg"
        ]
      },
      {
        heading: "Software & Programming",
        body: "Arduino Nano firmware reads temperature and humidity from sensors, calculates absolute and relative humidity, and operates fans based on configurable threshold values."
      },
      {
        heading: "Performance & Updates",
        body: "System operation achieved reduction in relative humidity from over 95% to under 50%. Firmware updates resolved cold-boot issues with the OLED display."
      },
      {
        heading: "Schematics",
        images: [
          "/images/schematics.jpg"
        ]
      }
    ]
  },
  {
    slug: "a8c3f4",
    title: "Automotive IoT Data Terminal",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Vehicle terminal for multi-interface data acquisition, storage, and cloud-based analytics with high reliability.",
    longDescription: "Embedded in-vehicle terminal providing multi-interface data decoding, offline storage, GPS positioning, MQTT communication, and cloud platform integration. Designed for robust automotive operation with future expandability, supporting real-time telemetry, vehicle diagnostics, and IoT connectivity.",
    tags: ["Embedded Systems", "Firmware Development", "IoT", "Vehicle Electronics", "Hardware Design", "Prototyping", "Cloud Integration"],
    icon: Cpu,
    highlight: "IoT Vehicle Terminal",
    hidden: true,
    media: [
      { type: "image", src: "/images/cover.jpg" }
    ],
    deliverables: [
      "Vehicle terminal with multi-interface connectivity",
      "Firmware supporting HAL-based STM32 architecture",
      "Offline storage and GPS tracking",
      "MQTT and cloud communication capabilities",
      "Expandable design for additional modules"
    ],
    sections: [
      {
        heading: "MCU Selection",
        body: "High-performance microcontroller selected to provide sufficient interfaces and processing capability for vehicle data acquisition and control.",
        bullets: [
          "STM32F407VE ARM Cortex-M4, 168 MHz, 210 DMIPS",
          "512 KB flash, 192 KB SRAM, 86 I/O ports",
          "6 UARTs, 2 CAN, 3 SPI, 1 USB device, 1 USB host, 1 Ethernet",
          "17 timers, ADC/DAC, multiple peripherals"
        ],
        images: [
          "/images/img1.jpg"
        ]
      },
      {
        heading: "Power Module Design",
        bullets: [
          "MP4462 step-down module: 4.5–36V input, integrated MOSFET, soft start, undervoltage protection, current limiting, high efficiency",
          "0650 alloy powder-molded inductors: 3.3µH @ 9A, 10µH @ 5.5A",
          "SP1045L barrier diode for low voltage drop and efficiency",
          "Low-ESR solid capacitors for input/output ripple reduction and stable power"
        ],
        images: [
          "/images/mcu2.jpg"
        ]
      },
      {
        heading: "Interface Module Design",
        bullets: [
          "CAN and RS485 buses with isolation modules for electrical safety",
          "3R090A-5SS gas discharge tube for high-voltage protection",
          "1MΩ capacitor and 10nF resistor for interface shielding",
          "Two TVS diodes (NUP2105, PSM712) for common-mode voltage protection"
        ],
        images: [
          "/images/mcu3.jpg"
        ]
      },
      {
        heading: "Main Control Circuit",
        bullets: [
          "W25Q256 FLASH for configuration and data storage",
          "SD card for raw bus data logging with timestamps",
          "Debug port via 2.54mm header for bootloader and maintenance",
          "RTC clock and 8M system clock for time-stamping",
          "Reserved USB device port for future functionality",
          "Four status LEDs: network, system, CAN, RS485"
        ],
        images: [
          "/images/mcu5.jpg"
        ]
      },
      {
        heading: "Communication Module",
        bullets: [
          "Quectel EC20 R2.1 CAT4 module, 150 Mbps downlink / 50 Mbps uplink",
          "PCIE format for easy installation and replacement",
          "USB/UART interface with TI 8-way bidirectional level conversion (1.8V to 3.3V)",
          "Filtered 3.3V power rail with high-current supply for stability",
          "4G and GPS antennas connected via IPEX-to-SMA jumpers, soldered to PCB",
          "RF signals routed through shielded coaxial jumpers for minimal loss"
        ],
        images: [
          "/images/mcu4.jpg"
        ]
      },
      {
        heading: "Firmware Development",
        body: "Firmware developed using STM32CubeMX and Keil MDK5, based on HAL architecture. Includes BSP and application layers for CAN parsing, EC20 AT command drivers, FATFS file operations, and JSON packaging for AWS IoT upload.",
        images: [
          "/images/mcu6.jpg"
        ]
      }
    ]
  },
  {
    slug: "e2b4cgg",
    title: "FPGA-Based SDR Setup and Lab Platform",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-firmware", "iot-connected-devices"],
    description: "Step-by-step hardware and software setup for FPGA-based software-defined radio using ZCU102 and AD9371 FMC card.",
    longDescription: "Lab project detailing hardware and software setup for FPGA-based software-defined radio. Utilizes the ZCU102 platform and Analog Devices ADRV9371-W/PCBZ FMC card. Covers Vivado and PetaLinux configuration, FPGA and embedded Linux project generation, and hardware integration for real-world SDR experimentation.",
    tags: ["SDR", "FPGA", "ZCU102", "AD9371", "PetaLinux", "Vivado", "Embedded Linux"],
    icon: Radio,
    highlight: "FPGA SDR Setup",
    hidden: true,
    media: [
      { type: "image", src: "/images/project1.jpg" }
    ],
    deliverables: [
      "ZCU102 SDR hardware setup guide",
      "Vivado FPGA project configuration",
      "PetaLinux embedded Linux setup for SDR",
      "FPGA-to-AD9371 integration workflow",
      "Hands-on FPGA SDR lab environment"
    ],
    sections: [
      {
        heading: "Hardware & Software Components",
        body: "Zynq UltraScale+ MPSoC ZCU102 board paired with ADI ADRV9371-W/PCBZ FMC card. Development environment includes Vivado Design Suite and PetaLinux tools."
      },
      {
        heading: "Project Story",
        body: "Software-defined radio (SDR) is an important application in FPGA development. Analog Devices provides FMC boards for RF transceivers compatible with FPGA platforms. This project demonstrates configuration and deployment of ADI drivers on ZCU102 running embedded Linux.",
        images: [
          "/images/screen_shot_2022-12-02_at_6_45_17_pm_pdcBh2iS6J.jpg",
          "/images/screen_shot_2022-12-02_at_6_45_03_pm_0MBAtH638N.jpg"
        ]
      },
      {
        heading: "Vivado Project Setup",
        body: "Create FPGA project in Vivado using Analog Devices HDL repository. Source Vivado tools and run makefile to generate ZCU102 project for AD9371 FMC.",
        code: [
          "~$ mkdir -p xilinx_sdr\n~$ cd ./xilinx_sdr/\n~$/xilinx_sdr$",
          "~$/xilinx_sdr/hdl$ git checkout hdl_2021_r1",
          "~$/xilinx_sdr/hdl$ cd ./projects/adrv9371x/zcu102/\n~$/xilinx_sdr/hdl/projects/adrv9371x/zcu102$ source /tools/Xilinx/Vivado/2021.1/settings64.sh\n~$/xilinx_sdr/hdl/projects/adrv9371x/zcu102$ make"
        ]
      },
      {
        heading: "PetaLinux Project Setup",
        body: "Set up PetaLinux project for ZCU102. Import ADI Yocto layers, configure hardware description from Vivado, and build kernel and root filesystem.",
        code: [
          "~$ cd ./xilinx_sdr/\n~$/xilinx_sdr$ source /tools/Xilinx/PetaLinux/2021.1/settings.sh\n~$/xilinx_sdr$ petalinux-create -t project -s ./xilinx-zcu102-v2021.1-final.bsp --name adi_os",
          "~$/xilinx_sdr$ cd ./adi_os/project-spec/\n~$/xilinx_sdr/adi_os/project-spec$ \n",
          "~$/xilinx_sdr/adi_os$ petalinux-config --get-hw-description ../hdl/projects/adrv9371x/zcu102/adrv9371x_zcu102.sdk/",
          "~$/xilinx_sdr/adi_os$ petalinux-config -c kernel",
          "~$/xilinx_sdr/adi_os$ petalinux-config -c rootfs",
          "~$/xilinx_sdr/adi_os$ petalinux-build"
        ]
      },
      {
        heading: "Hardware Connection",
        body: "Connect ZCU102 to 12V power, USB to host PC, and attach ADI ADRV9371-FMC board to HPC0 connector. Ethernet connection to host PC or router for communication."
      }
    ]
  },
  {
    slug: "a7f3c9",
    title: "Edge AI Cardiac Monitoring Platform",
    category: "AI & Edge Computing",
    filterSlugs: ["ai-edge-computing", "embedded-firmware"],
    description: "Portable edge AI system for detecting atrial fibrillation from PPG signals using ESP32 with real-time on-device inference.",
    longDescription: "Edge AI-based biomedical system for real-time detection of atrial fibrillation (AFib) using photoplethysmography (PPG) signals on an ESP32 platform. Processes sensor data using a lightweight model trained via Edge Impulse. System includes signal acquisition, preprocessing, feature extraction (HR/HRV), and classification, fully on-device without cloud dependency. Battery-powered and portable, designed for low-latency health monitoring under constrained embedded conditions.",
    tags: [
      "Edge AI",
      "ESP32",
      "PPG",
      "Signal Processing",
      "Machine Learning",
      "Embedded Systems",
      "Healthcare IoT"
    ],
    icon: Activity,
    highlight: "Edge AI Health Monitoring",
    hidden: true,
    media: [
      { type: "image", src: "/images/_h8itjqr0Kc.jpg" }
    ],
    deliverables: [
      "Edge ML Model (PPG Classification)",
      "ESP32 Firmware Integration",
      "Signal Processing Pipeline (HR/HRV)",
      "Real-Time Inference System",
      "Embedded UI & Feedback System"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Portable edge AI platform for on-device detection of atrial fibrillation from PPG signals. Eliminates cloud dependency while maintaining low-latency inference."
      },
      {
        heading: "Sensing & Signal Acquisition",
        body: "Captures optical cardiac signals via PPG sensor.",
        bullets: [
          "MAX30102 PPG sensor for optical heart signal acquisition",
          "Sampling at 50 Hz optimized for embedded processing",
          "30-second acquisition window for stable classification",
          "On-device signal normalization and noise filtering"
        ],
        images: [
          "/images/ppg_fBPKCV13qa.jpg"
        ]
      },
      {
        heading: "Hardware Platform",
        body: "Compact ESP32-based wearable with integrated UI and low-power design.",
        bullets: [
          "ESP32 (M5StickC Plus) for processing and display",
          "Integrated display, buzzer, and buttons",
          "Battery-powered portable design",
          "I2C interface for sensor communication"
        ],
        images: [
          "/images/m5stickc_fuYvlbjdT5.jpg",
          "/images/heart_rate_hat_s7MZRoj74o.jpg"
        ]
      },
      {
        heading: "Data Pipeline",
        body: "End-to-end pipeline from raw signal acquisition to model-ready input format.",
        bullets: [
          "MIMIC dataset for AFib and normal rhythm samples",
          "CSV signal extraction and preprocessing",
          "Interpolation of missing values",
          "Conversion to Edge Impulse JSON acquisition format",
          "Automated dataset upload via CLI"
        ],
        images: [
          "/images/data_acquisition_OG0KLUVkf7.jpg"
        ]
      },
      {
        heading: "Feature Engineering",
        body: "Extraction of physiological indicators from PPG signals.",
        bullets: [
          "Heart Rate (HR) calculation",
          "Heart Rate Variability (HRV) analysis",
          "30-second sliding window segmentation",
          "Downsampling from 125 Hz to 50 Hz"
        ]
      },
      {
        heading: "Model Development",
        body: "Lightweight classifier optimized for embedded deployment.",
        bullets: [
          "XGBoost-based classifier",
          "93.2% training accuracy (float32 model)",
          "95.15% test accuracy",
          "Embedded inference optimized via Edge Impulse"
        ]
      },
      {
        heading: "Edge Deployment",
        body: "Model deployed directly on ESP32 for real-time inference.",
        bullets: [
          "EON compiler optimization for embedded execution",
          "Arduino-compatible ML library integration",
          "On-device inference without cloud dependency",
          "Low-latency classification pipeline"
        ],
        images: [
          "/images/deployment_GCJXHncqq4.jpg"
        ]
      },
      {
        heading: "User Interface & Interaction",
        body: "Device provides real-time feedback and simple user interaction.",
        bullets: [
          "Waveform visualization on embedded display",
          "Progress bar for sampling duration",
          "Audible buzzer feedback",
          "Button-based control interface"
        ],
        images: [
          "/images/user_interface_gmFljHQj9Z.jpg"
        ]
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates end-to-end embedded AI design, including biomedical signal processing, dataset engineering, model optimization, and real-time deployment. Highlights ability to implement efficient, on-device AI solutions for healthcare monitoring."
      }
    ]
  },
  {
    slug: "c4d5f2",
    title: "High-Resolution Multi-Channel Biosignal Shield",
    category: "Embedded Systems",
    filterSlugs: ["hardware-design", "embedded-firmware", "biosignal-processing"],
    description: "Arduino-compatible shield for multi-channel EEG, EMG, and EKG acquisition with low-noise 24-bit ADCs.",
    longDescription: "High-performance shield for digitizing biosignals including EEG, EMG, and EKG. Supports multiple synchronized channels, low-noise acquisition, and flexible Arduino integration for professional research and maker applications.",
    tags: ["EEG", "EMG", "EKG", "Embedded Systems", "ADC", "Signal Processing", "Hardware Design"],
    icon: Cpu,
    highlight: "High-Resolution Biosignal Shield",
    hidden: true,
    media: [
      { type: "image", src: "/images/hackeeg-angle-01_png_project-body_XXhhNa5B8W.jpg" }
    ],
    deliverables: [
      "Arduino-compatible shield for EEG, EMG, and EKG",
      "Low-noise 8-channel 24-bit ADS1299 ADC",
      "On-chip programmable gain amplifier",
      "Supports up to four boards for 32 channels",
      "USB and wireless data streaming via microcontroller"
    ],
    sections: [
      {
        heading: "Overview",
        body: "Capable of capturing EEG, EMG, EKG, and other bioelectrical signals. Onboard SoC provides low-noise acquisition sensitive enough to detect microvolt-level signals, suitable for research and embedded applications."
      },
      {
        heading: "Key Features",
        body: "Utilizes Texas Instruments ADS1299 EEG ADC. Includes on-chip programmable gain amplifier (1–24×), SPI EEPROM for configuration, jumpers for control line selection, DMA drivers for 8-channel high-speed sampling (up to 8000 samples/sec @ 24-bit), and USB 2.0 HS for rapid data transfer when connected to an Arduino."
      },
      {
        heading: "Expandability",
        body: "Up to four shields can be daisy-chained to provide 32 simultaneous channels. Can be programmed using Arduino IDE and stream data via USB or wirelessly through a Raspberry Pi 4 for Wi-Fi connectivity."
      },
      {
        heading: "Compatibility",
        body: "Includes voltage level shifters for operation with Arduino Mega in addition to Arduino Due, enabling flexible integration across multiple embedded projects."
      },
      {
        heading: "Usage Examples",
        images: [
          "/images/1_XhqBXbQSB8m9VvMfx5H-tg.jpg"
        ],
        body: "Can capture high-speed biosignal data when connected to a laptop. Paired with a Raspberry Pi 4, it supports wireless Wi-Fi transmission for remote monitoring or data logging."
      }
    ]
  },
  {
    slug: "d9e3a6",
    title: "High-Speed Embedded Camera Streaming Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Embedded system for real-time image capture and streaming via Ethernet, with Python-based frame reassembly and decoding.",
    longDescription: "Embedded platform for capturing and streaming camera images over Ethernet. Uses a microcontroller board with DVP camera module to acquire JPEG frames, segment them into UDP packets, and transmit to a host PC. Python software on the host reassembles and decodes the frames in real time, providing low-latency image streaming for IoT vision, robotics, and remote monitoring applications.",
    tags: ["Embedded Systems", "Camera", "Ethernet", "Python", "UDP Streaming", "IoT", "Real-Time"],
    icon: Camera,
    highlight: "High-Speed Image Streaming",
    hidden: true,
    media: [
      { type: "image", src: "/images/_CWzMEnpcbf.jpg" }
    ],
    deliverables: [
      "Embedded board streaming system",
      "DVP camera interface for real-time image capture",
      "UDP-based transmission protocol",
      "Python software for frame reassembly and decoding",
      "Foundation for IoT vision and robotics applications"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Embedded system captures JPEG frames via a DVP camera, splits them into UDP packets for Ethernet transmission, and reassembles them on a host PC in real time using Python."
      },
      {
        heading: "Hardware Components",
        bullets: [
          "WIZnet Pico microcontroller board (RP2040/RP2350 compatible)",
          "Quick-Bootup 3MP DVP Camera Module"
        ],
        images: [
          "/images/image_xfU8Qdm63M.jpg"
        ]
      },
      {
        heading: "JPEG Frame Capture Sequence",
        code: [
          "① VSYNC ↑ → Frame Start\n② HSYNC ↑ → New Line Start\n③ PCLK ↑ → Sample D0–D7 (8-bit pixel)\n④ DMA stores 32-bit chunks into line buffer\n⑤ HSYNC ↓ → Line End\n⑥ VSYNC ↓ → Frame End"
        ],
        body: "PIO handles timing while DMA continuously transfers 32-bit data blocks into RAM. Frame acquisition retries until a complete frame is captured."
      },
      {
        heading: "UDP Transmission Process",
        body: "Frames are segmented into ≤1,400-byte payloads with a 4-byte header for UDP transmission.",
        images: [
          "/images/image_AzuiPpcOBk.jpg"
        ],
        code: [
          "total_packets = (jpeg_size + PAYLOAD_SIZE - 1) / PAYLOAD_SIZE;\nfor (pkt_id = 0; pkt_id < total_packets; pkt_id++) {\n    tx_packet[0] = frame_id;\n    tx_packet[1] = pkt_id;\n    tx_packet[2] = total_packets;\n    tx_packet[3] = (pkt_id == total_packets - 1) ? 0x01 : 0x00;\n    memcpy(tx_packet + 4, jpeg_data + offset, chunk_size);\n    sendto(socket, tx_packet, chunk_size + 4, destip, destport);\n}"
        ]
      },
      {
        heading: "Python Reassembly",
        code: [
          "fid, pid, tot = pkt[0], pkt[1], pkt[2]\nself.buf.setdefault(fid, {})[pid] = pkt[4:]\nif len(self.buf[fid]) == tot:\n    data = b\"\".join(self.buf[fid][i] for i in range(tot))\n    return data  # Complete JPEG frame restored"
        ],
        body: "Python program uses OpenCV to decode and display frames in real time, performing lossless assembly with intelligent packet reordering."
      },
      {
        heading: "Execution Guide",
        body: "Steps to build, flash, and run the demo:\n1. Select the board in CMakeLists.txt.\n2. Build the firmware using cmake and make.\n3. Flash the firmware to the Pico using BOOTSEL.\n4. Run the Python GUI to display live images."
      },
      {
        heading: "Key Takeaways",
        images: [
          "/images/image_Ph0eWCc9IK.jpg"
        ]
      }
    ]
  },
  {
    slug: "b8f5d2",
    title: "High-Speed Embedded Ethernet Camera Platform",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "iot-connected-devices", "hardware-design"],
    description: "Embedded system for real-time Ethernet-based camera streaming with dual protocol support and Python-based decoding.",
    longDescription: "Embedded platform capturing images from an OV2640 camera and streaming them over Ethernet. Supports HTTP/MQTT protocols, adaptive memory management, and robust error recovery. Provides a foundation for IoT vision, robotics, and real-time monitoring applications.",
    tags: ["Embedded Systems", "Ethernet", "Camera", "Python", "Cloud Integration", "Real-Time", "IoT"],
    icon: Camera,
    highlight: "High-Speed Ethernet Camera Streaming",
    hidden: true,
    media: [
      { type: "image", src: "/images/image_NiZXznDryx.jpg" }
    ],
    deliverables: [
      "Ethernet-powered camera platform",
      "Real-time image capture from OV2640 module",
      "Dual protocol support (HTTP/MQTT)",
      "Python-based reassembly and live decoding",
      "Robust error recovery and memory management"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Embedded system capturing JPEG frames via OV2640 camera, transmitting over Ethernet, and decoding frames in real time on a host PC. Provides reliable image streaming for IoT and robotics applications."
      },
      {
        heading: "Components",
        bullets: [
          "W6300-EVB-PICO2 Microcontroller Board",
          "OV2640 Camera Module",
          "2K ohm Resistors × 2",
          "Breadboard and jumper wires"
        ],
        images: [
          "/images/image_4cTYqguIEH.jpg",
          "/images/image_Xu5MzVmmK8.jpg"
        ]
      },
      {
        heading: "Hardware Setup",
        body: "Connect OV2640 camera to microcontroller: VSYNC → GP12, HREF → GP11, PCLK → GP10, D0-D7 → GP0-GP7, SCL → GP9, SDA → GP8, RESET → GP13. Pull-up resistors ensure reliable I2C communication.",
        bullets: [
          "RP2350 dual Cortex-M33 with 520KB SRAM",
          "16MB flash memory with network buffers",
          "8 sockets for HTTP/MQTT",
          "IPv4/IPv6 dual stack support",
          "Enhanced security with TrustZone and secure boot"
        ]
      },
      {
        heading: "Code and Firmware",
        code: [
          "import time\nimport board\nimport busio\nimport adafruit_ov2640\nimport wiznet\nimport digitalio\nimport binascii\nimport gc\nimport ssl\nfrom adafruit_wiznet5k.adafruit_wiznet5k import WIZNET5K\nimport adafruit_wiznet5k.adafruit_wiznet5k_socketpool as socketpool\nimport adafruit_minimqtt.adafruit_minimqtt as MQTT\nfrom adafruit_io.adafruit_io import IO_HTTP\nimport adafruit_requests\ntry:\n    from secrets import secrets\nexcept ImportError:\n    print(\"MQTT secrets are kept in secrets.py, please add them there!\")\n    raise",
          "secrets = {\n    \"aio_username\": \"ADAFRUIT_IO_USERNAME\",\n    \"aio_key\": \"ADAFRUIT_IO_KEY\"\n}",
          "# Ethernet reset pin\nethernetRst = digitalio.DigitalInOut(board.W5K_RST)\nethernetRst.direction = digitalio.Direction.OUTPUT\n# SPI configuration for Ethernet\ncs = digitalio.DigitalInOut(board.W5K_CS)\nspi_bus = wiznet.PIO_SPI(board.W5K_SCK, \n                     quad_io0=board.W5K_MOSI, \n                     quad_io1=board.W5K_MISO, \n                     quad_io2=board.W5K_IO2, \n                     quad_io3=board.W5K_IO3)\n# Reset\nethernetRst.value = False\ntime.sleep(1)\nethernetRst.value = True\neth = WIZNET5K(spi_bus, cs, is_dhcp=True, mac=MY_MAC, debug=False)\npool = socketpool.SocketPool(eth)"
        ]
      },
      {
        heading: "Features",
        bullets: [
          "Dual protocol support (HTTP/MQTT)",
          "Adaptive memory management",
          "Real-time image transmission",
          "Robust error recovery",
          "Hardware camera/Ethernet integration"
        ]
      },
      {
        heading: "Conclusion",
        bullets: [
          "Reliable camera-to-cloud transmission",
          "Effective memory management in constrained systems",
          "Flexible protocol support for different deployments",
          "Foundation for embedded vision applications"
        ],
        body: "Platform provides a balance between performance and embedded resource constraints, offering a versatile solution for IoT vision and robotics deployments."
      },
      {
        heading: "Schematics",
        images: [
          "/images/1_rnmgttwgst_ChTjTtpiwz.jpg"
        ]
      }
    ]
  },
  {
    slug: "c4f7e2",
    title: "Modular Multi-Phase Energy Monitoring & Control System",
    category: "Embedded Systems",
    filterSlugs: ["embedded-firmware", "power-electronics", "iot-connected-devices"],
    description: "Professional energy monitoring platform with multi-phase support, DAC/PWM/MPPT outputs, and I2C expansion for high-precision telemetry.",
    longDescription: "Modular energy monitoring and control system using ESP32 microcontrollers and ATM90E32 power metering ICs. Supports three-phase or three independent single-phase circuits, configurable DAC/PWM/MPPT outputs, and I2C expansion. Designed for high-precision energy telemetry in advanced embedded systems applications.",
    tags: ["Energy Monitoring", "Power Electronics", "Embedded Systems", "ESP32", "DAC", "PWM", "MPPT"],
    icon: Cpu,
    highlight: "High-Precision Multi-Phase Energy Control",
    hidden: true,
    media: [
      { type: "image", src: "/images/_SgSKULlyfj.jpg" }
    ],
    deliverables: [
      "ESP32-based multi-phase energy monitoring system",
      "DAC, PWM, MPPT, and I2C expansion outputs",
      "High-fidelity ATM90E32 power metering integration",
      "Modular PCB design for production and beta testing",
      "Professional-grade firmware and calibration"
    ],
    sections: [
      {
        heading: "System Overview",
        body: "Enhanced platform building on previous IPEM design, supporting DAC outputs and multiple expansion ports. Engineered for professional energy monitoring across single-phase or three-phase circuits."
      },
      {
        heading: "Hardware Deployment",
        images: [
          "/images/ipec_boards_prepared_AyTnWHKsXK.jpg",
          "/images/ipec_esp32ue_atm90e32_sdk_production_1_2307_102p_-_kit_angled_yjZ6sQoSd0.jpg",
          "/images/ipec_ipex_beta_testing_230716_iKUwV8G19p.jpg",
          "/images/ipex_beta_testing_230716_97NrHivRU9.jpg",
          "/images/ipec_and_ipec_stacked_2_S89uurT8Km.jpg",
          "/images/_Vx03rStLbZ.jpg"
        ]
      },
      {
        heading: "Technical Implementation",
        body: "Supports single-phase and three-phase operation with high precision. DAC outputs can generate fixed voltage, PWM, MPPT, or modulated outputs. Firmware ensures robust synchronization with current transformers and high-speed telemetry."
      },
      {
        heading: "CAD & Schematics",
        body: "3D and PCB design files prepared for production and beta evaluation, enabling scalable deployment and professional-grade integration."
      }
    ]
  },
  {
    slug: "f8a4d1",
    title: "Compact USB-C Multi-Voltage Test Supply",
    category: "Hardware Design",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "prototyping"],
    description: "Small, high-performance lab power supply providing multiple voltage outputs using USB-C fast charging protocols.",
    longDescription: "Embedded compact power supply leveraging USB-C fast charging protocols to deliver configurable multiple voltage levels efficiently. Integrates protection modules, high-efficiency design, and versatile input/output for lab and prototyping applications.",
    tags: ["Power Electronics", "USB-C PD", "Embedded Hardware", "Prototyping", "PCB Design"],
    icon: Zap,
    highlight: "Multi-Voltage USB-C Supply",
    hidden: true,
    media: [
      { type: "image", src: "/images/mini_img_1007_jyD90jaciv.jpg" }
    ],
    deliverables: [
      "Compact lab bench power supply",
      "Multiple voltage outputs (5V, 9V, 12V, 15V, 20V)",
      "CH224K IC-based PD support",
      "High efficiency and integrated protection modules",
      "Configurable input/output for lab testing"
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Compact test supply providing multiple constant voltage outputs from a single USB-C fast charger. Suitable for lab experiments and embedded prototyping requiring precise multi-voltage sources."
      },
      {
        heading: "Design Story",
        body: "USB-C fast charging allows multiple voltage levels. The CH224K IC integrates USB PD and fast-charging protocols, providing high efficiency and minimal external circuitry."
      },
      {
        heading: "Voltage Configuration",
        body: "The CH224K supports multiple voltages (5, 9, 12, 15, 20V) via jumper settings and internal programming.",
        images: [
          "/images/mini_img_1022_BldrPdqhzz.jpg"
        ]
      },
      {
        heading: "Component Layout",
        images: [
          "/images/mini_img_0990_7CB6VJowpQ.jpg"
        ]
      },
      {
        heading: "Schematics Overview",
        images: [
          "/images/screenshot_2024_11_29-9_ikyQgBErhM.jpg",
          "/images/screenshot_2024_11_29-10_3jE8QEzDkr.jpg"
        ]
      },
      {
        heading: "PCB Layout",
        images: [
          "/images/mini_img_0989_KNvdWYpOdD.jpg",
          "/images/screenshot_2024_11_27-5_d0cNxAeq7u.jpg",
          "/images/component_arrangement_i3Hi2sAktQ.jpg"
        ]
      }
    ]
  },
];

export { projects };

const INITIAL_COUNT = 6;

function CardVideo({
  item,
  fallbackSrc,
}: {
  item: MediaItem;
  fallbackSrc?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovering, setHovering] = useState(false);
  const posterSrc = item.poster || fallbackSrc;

  const handleMouseEnter = useCallback(() => {
    setHovering(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {posterSrc && (
        <img
          src={posterSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${hovering ? "opacity-0" : "opacity-100"
            }`}
        />
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        playsInline
        loop
        preload="metadata"
      >
        <source src={item.src} type="video/mp4" />
      </video>
      <div
        className={`absolute inset-0 flex items-center justify-center z-10 pointer-events-none transition-opacity duration-200 ${hovering ? "opacity-0" : "opacity-100"
          }`}
      >
        <div className="rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30 w-10 h-10">
          <Play className="text-white ml-0.5 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

function MediaSlider({
  media,
  className,
  isModal,
}: {
  media: MediaItem[];
  className?: string;
  isModal?: boolean;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
  }, [media]);

  const safeIndex = currentIndex < media.length ? currentIndex : 0;
  const current = media[safeIndex];
  const hasMultiple = media.length > 1;

  const goTo = useCallback((index: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setCurrentIndex(index);
  }, []);

  const goPrev = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      goTo(safeIndex === 0 ? media.length - 1 : safeIndex - 1);
    },
    [safeIndex, media.length, goTo],
  );

  const goNext = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      goTo(safeIndex === media.length - 1 ? 0 : safeIndex + 1);
    },
    [safeIndex, media.length, goTo],
  );

  const togglePlay = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    },
    [isPlaying],
  );

  const toggleMute = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (!videoRef.current) return;
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    },
    [isMuted],
  );

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      {media.map((item, i) => (
        <div key={i} className={`${i === safeIndex ? "block" : "hidden"}`}>
          {item.type === "video" ? (
            isModal ? (
              <>
                <video
                  ref={i === safeIndex ? videoRef : undefined}
                  poster={item.poster}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  preload="auto"
                  data-testid="video-media-player"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                {i === safeIndex && !isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                    onClick={togglePlay}
                    data-testid="button-play-video"
                  >
                    <div className="rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm border border-primary/50 transition-transform hover:scale-110 w-16 h-16">
                      <Play className="text-primary-foreground ml-0.5 w-7 h-7" />
                    </div>
                  </div>
                )}
                {i === safeIndex && isPlaying && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 z-20">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-background/50 backdrop-blur-sm text-foreground"
                      onClick={toggleMute}
                      data-testid="button-toggle-mute"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="bg-background/50 backdrop-blur-sm text-foreground"
                      onClick={togglePlay}
                      data-testid="button-toggle-play"
                    >
                      <Pause className="w-5 h-5" />
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <CardVideo
                item={item}
                fallbackSrc={media.find((m) => m.type === "image")?.src}
              />
            )
          ) : (
            <img
              src={item.src}
              alt=""
              className={`w-full ${isModal ? "object-contain" : "h-full object-cover"
                }`}
            />
          )}
        </div>
      ))}

      {hasMultiple && (
        <>
          <button
            className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground transition-all hover:bg-background/90 ${isModal ? "w-9 h-9" : "w-7 h-7"
              }`}
            onClick={goPrev}
            data-testid="button-media-prev"
          >
            <ChevronLeft className={isModal ? "w-5 h-5" : "w-4 h-4"} />
          </button>
          <button
            className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground transition-all hover:bg-background/90 ${isModal ? "w-9 h-9" : "w-7 h-7"
              }`}
            onClick={goNext}
            data-testid="button-media-next"
          >
            <ChevronRight className={isModal ? "w-5 h-5" : "w-4 h-4"} />
          </button>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
            {media.map((item, i) => (
              <button
                key={i}
                className={`rounded-full transition-all ${i === safeIndex
                  ? "w-5 h-1.5 bg-primary"
                  : "w-1.5 h-1.5 bg-foreground/40 hover:bg-foreground/70"
                  }`}
                onClick={(e) => goTo(i, e)}
                data-testid={`button-media-dot-${i}`}
              />
            ))}
          </div>

          <div className="absolute top-2 left-2 z-20">
            <span className="flex items-center gap-1 text-[10px] font-mono text-foreground/80 bg-background/60 backdrop-blur-sm border border-border/40 rounded-md px-1.5 py-0.5">
              <ImageIcon className="w-3 h-3" />
              {safeIndex + 1}/{media.length}
            </span>
          </div>
        </>
      )}

    </div>
  );
}

function RichSection({ section }: { section: ContentSection }) {
  return (
    <div className="space-y-4">
      {section.heading && (
        <div className="flex items-center gap-3">
          <h4 className="text-sm font-display font-semibold text-foreground tracking-wide">
            {section.heading}
          </h4>
          <div className="h-px flex-1 bg-border/40" />
        </div>
      )}
      {section.body && (
        <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-2.5">
          {section.bullets.map((bullet, j) => {
            if (typeof bullet === "string") {
              return (
                <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span>{bullet}</span>
                </li>
              );
            }
            return (
              <li key={j} className="space-y-1.5">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  <span className="text-sm font-medium text-foreground/90">{bullet.text}</span>
                </div>
                {bullet.sub && (
                  <ul className="ml-6 space-y-1">
                    {bullet.sub.map((s, k) => (
                      <li key={k} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="text-primary/50 font-mono shrink-0">–</span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
      {section.numbered && section.numbered.length > 0 && (
        <div className="space-y-6">
          {section.numbered.map((item, j) => (
            <div key={j} className="space-y-2">
              <p className="text-sm font-semibold text-foreground/90">
                <span className="text-primary font-mono mr-2">{j + 1}.</span>
                {item.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed pl-5">{item.body}</p>
              {item.image && (
                <div className="pl-5">
                  <div className="rounded-lg overflow-hidden border border-border/40 mt-2">
                    <img src={item.image} alt={item.title} className="w-full h-auto object-cover" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {section.images && section.images.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {section.images.map((src, j) => (
            <div key={j} className="rounded-lg overflow-hidden border border-border/40">
              <img src={src} alt="" className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      )}
      {section.code && section.code.length > 0 && (
        <pre className="my-6 bg-gray-900 rounded-lg shadow-md p-4 text-green-400 font-mono text-sm overflow-x-auto whitespace-pre-wrap break-words">
          {section.code.join("\n")}
        </pre>
      )}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const Icon = project.icon;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
      data-testid="modal-project-detail"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-background/85 backdrop-blur-sm" />

      {/* Modal wrapper - prev/next sit just outside the card */}
      <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>

        <button
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[72px] z-[210] w-10 h-10 items-center justify-center rounded-full bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          data-testid="button-prev-project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-[72px] z-[210] w-10 h-10 items-center justify-center rounded-full bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          data-testid="button-next-project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          className="relative max-h-[calc(100vh-4rem)] overflow-y-auto rounded-xl bg-card border border-border/50 shadow-2xl"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/40 bg-card rounded-t-xl">
            <div className="flex items-center gap-2 min-w-0">
              <Icon className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-[10px] font-mono text-muted-foreground/60 tracking-widest uppercase truncate">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                className="md:hidden flex items-center justify-center w-7 h-7 rounded-full border border-border/50 bg-muted/40 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                className="md:hidden flex items-center justify-center w-7 h-7 rounded-full border border-border/50 bg-muted/40 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors ml-1"
                data-testid="button-close-modal"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero media - first item only, no slide */}
          <div className="relative overflow-hidden border-b border-border/30">
            {project.media[0]?.type === "video" ? (
              <video
                className="w-full object-contain max-h-52 sm:max-h-none"
                loop
                muted
                playsInline
                autoPlay
                poster={project.media[0].poster}
                data-testid="video-modal-hero"
              >
                <source src={project.media[0].src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.media[0]?.src}
                alt={project.title}
                className="w-full object-contain max-h-52 sm:max-h-none"
                data-testid="img-modal-hero"
              />
            )}
          </div>

          {/* Brief overview block */}
          <div className="px-6 md:px-8 pt-6 pb-5 space-y-4 border-b border-border/30">
            {/* Title + highlight badge */}
            <div className="flex flex-wrap items-start gap-3">
              <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight flex-1 min-w-0">
                {project.title}
              </h3>
            </div>

            {/* Short description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            {/* Tag pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-[10px] font-mono bg-primary/10 text-primary border border-primary/25 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Deliverables as compact chips */}
            {project.deliverables && project.deliverables.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {project.deliverables.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 text-[10px] font-mono border border-border/50 text-muted-foreground/80 rounded px-2 py-0.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Main detailed content */}
          <div className="px-6 md:px-8 py-7 space-y-8">

            {/* Rich sections - each project has its own unique structure */}
            {project.sections && project.sections.length > 0 ? (
              project.sections.map((section, i) => (
                <RichSection key={i} section={section} />
              ))
            ) : (
              <div className="space-y-4">
                <h4 className="text-sm font-display font-semibold text-foreground tracking-wide flex items-center gap-3">
                  Project Overview
                  <span className="h-px flex-1 bg-border/40 block" />
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export function Project({
  initialSlug,
  initialCategory,
  initialRecommendedIds,
}: {
  initialSlug?: string;
  initialCategory?: string;
  initialRecommendedIds?: string;
} = {}) {
  const [, setLocation] = useLocation();

  const parseRecommendedSlugs = (ids?: string): Set<string> => {
    if (!ids) return new Set();
    const parts = ids.split("~");
    const isLegacy =
      (parts.length === 1 && ids.includes("-")) ||
      parts.every((p) => /^\d+$/.test(p));

    if (isLegacy) {
      const slugs = ids
        .split("-")
        .map(Number)
        .filter((n) => !isNaN(n) && n >= 0 && n < projects.length)
        .map((n) => projects[n].slug);

      if (slugs.length > 0) return new Set(slugs);
    }

    const validSlugs = parts.filter((s) => projects.some((p) => p.slug === s));
    return new Set(validSlugs);
  };

  const [recommended, setRecommended] = useState<Set<string>>(() =>
    parseRecommendedSlugs(initialRecommendedIds),
  );

  const [activeCategory, setActiveCategory] = useState(() => {
    if (initialRecommendedIds) {
      const decoded = parseRecommendedSlugs(initialRecommendedIds);
      return decoded.size > 0 ? "recommended" : "all";
    }
    return initialCategory || "all";
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const closingRef = useRef(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(() => {
    if (initialSlug) {
      const idx = projects.findIndex((p) => p.slug === initialSlug);
      return idx >= 0 ? idx : null;
    }
    return null;
  });

  useEffect(() => {
    if (initialRecommendedIds && !closingRef.current) {
      const decoded = parseRecommendedSlugs(initialRecommendedIds);
      if (decoded.size > 0) {
        setRecommended(decoded);
        setActiveCategory("recommended");
      }
      setTimeout(() => {
        document
          .getElementById("project")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialRecommendedIds]);

  useEffect(() => {
    if (initialSlug) {
      const idx = projects.findIndex((p) => p.slug === initialSlug);
      if (idx >= 0) {
        setSelectedIndex(idx);
      }
    }
  }, [initialSlug]);

  useEffect(() => {
    if (initialCategory && !closingRef.current) {
      setActiveCategory(initialCategory);
      setTimeout(() => {
        document
          .getElementById("project")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [initialCategory]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const toggleRecommended = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRecommended((prev) => {
      const next = new Set(prev);

      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }

      if (activeCategory === "recommended") {
        if (next.size > 0) {
          setLocation(`/recommended/${Array.from(next).join("~")}`);
        } else {
          setActiveCategory("all");
          setLocation("/");
        }
      }

      return next;
    });
  };

  const getRecommendedUrl = () => {
    if (recommended.size === 0) return "";
    const ids = Array.from(recommended).join("~");
    const base = typeof window !== "undefined" ? window.location.origin : "";
    return `${base}/recommended/${ids}`;
  };

  const copyRecommendedLink = () => {
    const url = getRecommendedUrl();
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2000);
      });
    }
  };

  const categoryFiltered =
    activeCategory === "recommended"
      ? Array.from(recommended)
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is Project => p !== undefined)
      : activeCategory === "all"
        ? projects.filter((p) => !p.hidden || recommended.has(p.slug))
        : projects.filter(
          (p) => p.filterSlugs.includes(activeCategory) && (!p.hidden || recommended.has(p.slug)),
        );

  const filteredProjects = searchQuery.trim()
    ? projects.filter((p) => {
      const q = searchQuery.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.longDescription.toLowerCase().includes(q) ||
        p.highlight.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.deliverables.some((d) => d.toLowerCase().includes(q))
      );
    })
    : categoryFiltered;

  const categoryBaseUrl =
    activeCategory === "recommended"
      ? recommended.size > 0
        ? `/recommended/${Array.from(recommended).join("~")}`
        : "/"
      : activeCategory === "all"
        ? "/"
        : `/category/${activeCategory}`;

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setVisibleCount(6);

    if (slug === "recommended") {
      if (recommended.size > 0) {
        setLocation(`/recommended/${Array.from(recommended).join("~")}`);
      } else {
        setLocation("/");
      }
    } else if (slug === "all") {
      setLocation("/");
    } else {
      setLocation(`/category/${slug}`);
    }
  };

  const openProject = (projectIndex: number) => {
    const project = filteredProjects[projectIndex];
    const globalIndex = projects.indexOf(project);
    setSelectedIndex(globalIndex);
    setLocation(`/project/${project.slug}`);
  };

  const closeProject = () => {
    closingRef.current = true;
    setSelectedIndex(null);
    setLocation(categoryBaseUrl);
    setTimeout(() => {
      closingRef.current = false;
    }, 200);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      const currentInFiltered = filteredProjects.findIndex(
        (p) => p === projects[selectedIndex],
      );

      const newFilteredIndex =
        currentInFiltered <= 0
          ? filteredProjects.length - 1
          : currentInFiltered - 1;

      const newProject = filteredProjects[newFilteredIndex];
      const newGlobalIndex = projects.indexOf(newProject);

      setSelectedIndex(newGlobalIndex);
      setLocation(`/project/${newProject.slug}`);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      const currentInFiltered = filteredProjects.findIndex(
        (p) => p === projects[selectedIndex],
      );

      const newFilteredIndex =
        currentInFiltered >= filteredProjects.length - 1
          ? 0
          : currentInFiltered + 1;

      const newProject = filteredProjects[newFilteredIndex];
      const newGlobalIndex = projects.indexOf(newProject);

      setSelectedIndex(newGlobalIndex);
      setLocation(`/project/${newProject.slug}`);
    }
  };

  const activeCategoryName =
    activeCategory === "recommended"
      ? "Recommended"
      : filterCategories.find((c) => c.slug === activeCategory)?.name ||
      "All Projects";

  return (
    <section id="project" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <div className="flex items-center gap-5 mb-10">
            <span className="text-[10px] font-mono text-muted-foreground/40 tracking-widest">0x0003</span>
            <span className="text-[10px] font-mono text-primary font-semibold tracking-widest uppercase">Projects</span>
            <div className="h-px flex-1 bg-border/35" />
            <p className="text-[11px] font-mono text-muted-foreground/50">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">
            Selected <span className="text-primary">Work</span>
          </h2>

          <div className="flex flex-wrap gap-2" data-testid="category-filters">
            {filterCategories.map((cat) => (
              <button
                key={cat.slug}
                data-testid={`filter-${cat.slug}`}
                onClick={() => handleCategoryChange(cat.slug)}
                className={`px-4 py-2 rounded-lg text-sm font-mono transition-all border ${activeCategory === cat.slug
                  ? "bg-primary/15 text-primary border-primary/40"
                  : "bg-card/60 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-foreground"
                  }`}
              >
                {cat.name}
              </button>
            ))}

            {recommended.size > 0 && (
              <>
                <button
                  data-testid="filter-recommended"
                  onClick={() => handleCategoryChange("recommended")}
                  className={`px-4 py-2 rounded-lg text-sm font-mono transition-all border flex items-center gap-1.5 ${activeCategory === "recommended"
                    ? "bg-amber-500/15 text-amber-400 border-amber-500/40"
                    : "bg-card/60 text-muted-foreground border-border/40 hover:border-amber-500/30 hover:text-foreground"
                    }`}
                >
                  <ThumbsUp className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  Recommended ({recommended.size})
                </button>

                <button
                  data-testid="button-copy-recommended-link"
                  onClick={copyRecommendedLink}
                  className="px-3 py-2 rounded-lg text-sm font-mono transition-all border bg-card/60 border-border/40 hover:border-primary/30 hover:text-foreground text-muted-foreground flex items-center gap-1.5"
                >
                  {copiedLink ? (
                    <Check className="w-3.5 h-3.5 text-green-400" />
                  ) : (
                    <Link2 className="w-3.5 h-3.5" />
                  )}
                  {copiedLink ? "Copied!" : "Copy Link"}
                </button>
              </>
            )}
          </div>

          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              data-testid="input-search-projects"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(6);
              }}
              placeholder="Search all projects including hidden..."
              className="w-full md:w-80 pl-10 pr-9 py-2 rounded-lg text-sm font-mono bg-card/60 border border-border/40 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 transition-colors"
            />

            {searchQuery && (
              <button
                data-testid="button-clear-search"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.slice(0, visibleCount).map((project, idx) => {
            const Icon = project.icon;
            const globalIdx = projects.indexOf(project);
            const isRecommended = recommended.has(project.slug);
            const firstMedia = project.media[0];

            return (
              <div
                key={project.slug}
                data-testid={`card-project-${idx}`}
                className="group cursor-pointer bg-card border border-border/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.25)]"
                onClick={() => openProject(idx)}
              >
                {/* Image hero */}
                <div className="relative h-64 overflow-hidden bg-background/60 shrink-0">
                  {firstMedia?.type === "video" ? (
                    <video
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      muted
                      playsInline
                      loop
                      autoPlay
                      poster={firstMedia.poster}
                    >
                      <source src={firstMedia.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={firstMedia?.src}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                  {/* Category - top left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-foreground/70 bg-background/70 backdrop-blur-sm border border-border/50 rounded-full px-2.5 py-1">
                      <Icon className="w-3 h-3 text-primary" />
                      {project.category}
                    </span>
                  </div>

                  {/* Highlight - bottom of image, triggers recommend on click */}
                  <div
                    className="absolute bottom-3 left-3 z-10"
                    onClick={(e) => toggleRecommended(project.slug, e)}
                    data-testid={`badge-highlight-${idx}`}
                  >
                    <span className="text-[10px] font-mono text-primary font-semibold tracking-wide">
                      ◆ {project.highlight}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">
                  {/* Title */}
                  <h3 className="text-[15px] font-display font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground/70 leading-relaxed line-clamp-2 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono text-primary/80 bg-primary/8 border border-primary/20 rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-mono text-muted-foreground/50 border border-border/40 rounded px-2 py-0.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/25 mt-auto">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground/40">
                      <span className="w-1 h-1 rounded-full bg-primary/40 inline-block" />
                      {project.deliverables.length} deliverables
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-primary/60 group-hover:text-primary transition-colors font-semibold">
                      View Case Study
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length > visibleCount && (
          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="font-mono text-sm border-primary/40 text-primary gap-2 hover:bg-primary/10"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              data-testid="button-show-more"
            >
              <ChevronDown className="w-4 h-4" />
              Show More ({filteredProjects.length - visibleCount} remaining)
            </Button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-mono text-sm">
              {searchQuery.trim()
                ? `No projects match "${searchQuery}". Try a different search term.`
                : activeCategory === "recommended"
                  ? "No recommended projects yet. Click the thumbs-up icon on any project card to add it."
                  : "No projects found in this category."}
            </p>
          </div>
        )}
      </div>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          onClose={closeProject}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
