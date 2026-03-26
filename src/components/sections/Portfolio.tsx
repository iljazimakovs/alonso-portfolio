import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "wouter";
import {
  Cpu,
  Server,
  Battery,
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
  Sun
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
  { name: "Firmware", slug: "embedded-firmware" },
  { name: "Linux & BSP", slug: "embedded-linux-bsp" },
  { name: "IoT & Connectivity", slug: "iot-connected-devices" },
  { name: "PCB & Hardware", slug: "pcb-hardware" },
];

interface ContentSection {
  heading?: string;
  body?: string;
  bullets?: Array<string | { text: string; sub?: string[] }>;
  images?: string[];
  numbered?: Array<{ title: string; body: string; image?: string }>;
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
    slug: "e4a1b2",
    title: "Configurable High-Power Input System",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Compact USB-C Power Delivery sink module supporting up to 20V 5A, designed as a barrel-connector replacement with hardware-based configuration and optional I2C telemetry.",
    longDescription:
      "Designed a compact USB-C Power Delivery sink board based on the Cypress CYPD3177 controller to replace traditional barrel-jack inputs with a modern USB-C PD interface. The module negotiates power directly from compliant USB-C PD adapters and supports selectable voltage levels of 5V, 9V, 12V, and 20V with current settings from 1A up to 5A. The design emphasizes software-free operation for standard use, while also exposing an optional I2C interface for telemetry, status inspection, and advanced control. Built on a compact 2 oz copper PCB with a detachable telemetry section, the board is suitable for inline cable integration, embedded installations, and high-current power delivery applications.",
    tags: [
      "USB-C PD",
      "CYPD3177",
      "Power Electronics",
      "PCB Design",
      "I2C Telemetry",
      "High Current Design",
      "Embedded Hardware",
    ],
    icon: Zap,
    highlight: "USB-C PD",
    media: [
      {
        type: "image",
        src: "/images/_BLGl2VleYg.jpg",
      },
    ],
    hidden: false,
    deliverables: [
      "USB-C PD Sink PCB",
      "Power Negotiation Hardware",
      "Voltage/Current Selection Design",
      "I2C Telemetry Interface",
      "Inline Integration-Ready Hardware",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed a USB-C Power Delivery sink module that replaces conventional barrel power connectors with a negotiation-based USB-C input. The design enables embedded systems and standalone electronics to draw power safely from standard USB-C PD adapters without requiring firmware for normal operation.",
      },
      {
        heading: "Core Design Concept",
        body: "The board follows Cypress's BCR (Barrel Connector Replacement) concept, transforming USB-C PD into a practical drop-in power source for devices that traditionally depend on dedicated DC adapters.",
        bullets: [
          "Operates as a USB-C PD sink device",
          "Negotiates power from compliant USB-C PD sources",
          "Exposes output through screw terminal or direct solder connection",
          "Replaces legacy power adapters with a compact inline module",
        ],
      },
      {
        heading: "Power Delivery Features",
        bullets: [
          "Selectable output voltages: 5V, 9V, 12V, and 20V",
          "Selectable current levels: 1A, 2A, 3A, and 5A",
          "Maximum power capability up to 100W",
          "Hardware-based configuration (no firmware required)",
          "Pre-configuration required before power-up",
        ],
      },
      {
        heading: "Hardware Architecture",
        numbered: [
          {
            title: "USB-C PD Controller Stage",
            body: "The CYPD3177 manages USB Power Delivery negotiation with the source adapter, enabling automatic contract establishment without external firmware.",
          },
          {
            title: "Efficient Power Switching",
            body: "A low Rds_on DMP3013SFV p-channel MOSFET supports efficient high-current delivery while minimizing thermal losses.",
          },
          {
            title: "Compact High-Current PCB",
            body: "Implemented on a compact 53 mm × 15.4 mm PCB with 2 oz copper, enabling high current handling in an inline-friendly form factor.",
          },
        ],
      },
      {
        heading: "Configuration & Operation",
        bullets: [
          "No programming required for standalone use",
          "Voltage and current configured via resistors or switches",
          "LED failure indicator for diagnostics",
          "Designed to prevent unsafe high-voltage misuse",
          "Lead-free assembly for production readiness",
        ],
      },
      {
        heading: "Telemetry Interface",
        body: "An optional I2C interface allows access to controller registers for monitoring and advanced integration.",
        bullets: [
          "I2C access to status and control registers",
          "Compatible with 3.3V hosts such as Arduino Due",
          "Useful for debugging and validation workflows",
          "Supports external scripts for inspection and testing",
        ],
      },
      {
        heading: "Mechanical Integration",
        body: "Designed for real-world deployment, the module supports compact inline integration into cables and embedded systems.",
        bullets: [
          "Inline cable integration capability",
          "Supports heat-shrink enclosure for permanent installation",
          "Detachable telemetry section for compact use",
          "Adaptable height depending on component population",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1208399/cables_VoeFMS9dBO.jpg",
          "https://hackster.imgix.net/uploads/attachments/1208401/heatschrink5_Z2jsInvZvb.jpg",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The final design delivers a compact, high-power USB-C PD sink solution that modernizes power input design. It demonstrates strong capability in USB-C PD integration, high-current PCB design, and product-oriented hardware development.",
      },
    ],
  },
  {
    slug: "f9c2d7",
    title: "Hardware-Accelerated Neural Compute Engine",
    category: "FPGA & Digital Design",
    filterSlugs: ["fpga-digital-design", "embedded-ai", "embedded-firmware"],
    description:
      "Implemented high-throughput neural network inference on FPGA using Vitis HLS, achieving over 200k FPS through parallelized architecture and quantized computation.",
    longDescription:
      "Designed and implemented a fully connected neural network inference engine on FPGA using Vitis High-Level Synthesis (HLS) on the Kria KV260 platform. The project focuses on accelerating small neural networks where traditional frameworks introduce overhead. By leveraging quantized integer arithmetic, pipelined matrix multiplication, and parallelized compute structures, the design achieves extremely high inference throughput. The workflow includes model quantization, HLS-based hardware generation, Vivado integration, and runtime execution using PYNQ. A comparison with RTL-based implementation highlights tradeoffs in hardware utilization and design efficiency.",
    tags: [
      "FPGA",
      "Vitis HLS",
      "Kria KV260",
      "PYNQ",
      "Deep Learning",
      "Quantization",
      "Parallel Computing",
    ],
    icon: Cpu,
    highlight: "FPGA AI",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1470478/_41pDWgCaDU.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "HLS Neural Network Implementation",
      "Quantized Model Pipeline",
      "FPGA Bitstream + Integration",
      "PYNQ Runtime Interface",
      "Performance Benchmarking",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Implemented a fully connected neural network inference engine on FPGA to evaluate performance gains from hardware acceleration compared to traditional embedded platforms. The design targets small neural networks where framework overhead limits performance.",
      },
      {
        heading: "Neural Network Fundamentals",
        body: "The network is implemented as a sequence of dense layers performing vector-matrix multiplications followed by activation functions and quantization.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1468476/network-1_nX3kYRKuCr.png",
          "https://hackster.imgix.net/uploads/attachments/1468478/nn-1_EjOow0B27g.png",
        ],
      },
      {
        heading: "Quantization Strategy",
        body: "To optimize FPGA execution, the model is converted from floating-point to integer arithmetic using quantization techniques compatible with hardware implementation.",
        bullets: [
          "32-bit floating point converted to 8-bit / 16-bit integer",
          "Scaling factors implemented as bit-shift operations",
          "Reduced computational cost and memory bandwidth",
          "Minimal accuracy loss for small network",
        ],
      },
      {
        heading: "HLS Architecture Design",
        body: "The neural network is implemented using HLS, enabling rapid hardware design while still achieving high performance through loop restructuring and parallelism.",
        bullets: [
          "Loop reordering to remove data dependencies",
          "Full pipelining of compute stages",
          "Vectorized matrix multiplication",
          "Parallel processing across multiple dimensions",
        ],
      },
      {
        heading: "FPGA Integration",
        body: "The generated HLS IP is integrated into the FPGA system using Vivado and deployed via PYNQ for runtime interaction.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1470725/screenshot_from_2022-07-19_17-03-50_gbWYavQZ3L.png",
          "https://hackster.imgix.net/uploads/attachments/1470119/screenshot_from_2022-07-18_14-58-11_PpmwBfmdIh.png",
        ],
      },
      {
        heading: "Hardware Utilization Analysis",
        body: "Comparison between HLS and handcrafted RTL implementation highlights tradeoffs in resource efficiency and design abstraction.",
        bullets: [
          "HLS provides faster development but higher resource usage",
          "RTL allows DSP reuse across layers",
          "Tradeoff between design time and hardware efficiency",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1474151/screenshot_from_2022-07-27_08-08-53_fnXhHMarlo.png",
          "https://hackster.imgix.net/uploads/attachments/1474150/screenshot_from_2022-07-27_08-08-33_4eyr88uqtR.png",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "Achieved extremely high inference throughput exceeding 200,000 FPS by combining quantization, parallelism, and pipelined architecture. The project demonstrates strong capability in FPGA-based AI acceleration, HLS design optimization, and hardware/software co-design.",
      },
    ],
  },
  {
    slug: "7a3e91",
    title: "Cloud-Connected Access Logging System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "WiFi-enabled RFID attendance system using ESP8266 with real-time logging to Google Sheets via cloud API.",
    longDescription:
      "Developed a low-cost IoT-based RFID attendance and access control system using ESP8266 and MFRC522. The system reads RFID card data and transmits it over HTTPS to a Google Apps Script web API, which logs attendance data into a Google Sheet in real time. Designed for deployment in classrooms, offices, and labs, the system provides immediate user feedback via LEDs and buzzer while maintaining reliable WiFi connectivity and cloud synchronization. The architecture eliminates the need for a dedicated backend server by leveraging Google Sheets as a lightweight database.",
    tags: [
      "ESP8266",
      "RFID",
      "IoT",
      "HTTP",
      "Google Sheets API",
      "Embedded C",
      "Cloud Integration",
    ],
    icon: Wifi,
    highlight: "RFID IoT",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1903473/_3HddXBvRpD.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "ESP8266 Firmware",
      "RFID Reader Integration",
      "Cloud Logging API (Google Script)",
      "Real-Time Attendance System",
      "Hardware Interface Design",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a cloud-connected attendance system that automates RFID-based identification and logs data directly to a remote spreadsheet. The system removes the need for manual registers or complex backend infrastructure by using a lightweight IoT-to-cloud pipeline.",
      },
      {
        heading: "System Architecture",
        body: "The system connects embedded hardware with a cloud-based logging service using a simple but effective architecture.",
        bullets: [
          "ESP8266 handles WiFi connectivity and HTTP communication",
          "MFRC522 reads RFID card data",
          "Google Apps Script acts as a REST-like API",
          "Google Sheets used as real-time database",
          "End-to-end flow: RFID → ESP8266 → HTTPS → Google Sheets",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1903476/circuit_rbJHBbM9hQ.png",
        ],
      },
      {
        heading: "Embedded Firmware Design",
        body: "Firmware was designed for reliability and continuous operation in real-world environments.",
        bullets: [
          "Automatic WiFi reconnection handling",
          "HTTPS request generation for secure data transmission",
          "RFID block authentication and data extraction",
          "Serial debugging for network and HTTP status monitoring",
        ],
      },
      {
        heading: "Cloud Integration",
        body: "Instead of building a custom backend, the system uses Google Apps Script to provide a scalable and serverless logging solution.",
        bullets: [
          "ESP8266 sends data via HTTP GET requests",
          "Google Script parses incoming data",
          "Data appended directly to spreadsheet rows",
          "Accessible, exportable, and easy to monitor",
        ],
      },
      {
        heading: "User Feedback System",
        body: "Real-time feedback improves usability and system clarity.",
        bullets: [
          "Green LED indicates successful read and upload",
          "Red LED signals errors or failed authentication",
          "Buzzer provides audible confirmation",
          "Double-beep pattern confirms valid scan",
        ],
      },
      {
        heading: "System Output",
        body: "Each RFID scan generates a structured log entry in the cloud database.",
        bullets: [
          "User identification (RFID / name)",
          "Timestamp (date and time)",
          "Sequential logging for tracking",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The system demonstrates a practical IoT architecture combining embedded hardware with cloud services to deliver a scalable and cost-effective attendance solution. It highlights experience in embedded networking, API integration, and real-time data systems without relying on heavy backend infrastructure.",
      },
    ],
  },
  {
    slug: "b8d4f1",
    title: "Industrial Dual-Processor Embedded Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware", "iot-connected-devices"],
    description:
      "Industrial-grade controller combining ESP32 and RP2040 in Raspberry Pi form factor, designed for reliable 24/7 operation with HAT compatibility and embedded-focused architecture.",
    longDescription:
      "Designed a high-reliability embedded controller platform combining an ESP32 and RP2040 in a Raspberry Pi 4 form factor. The system targets 24/7 automation and industrial environments where Linux-based SBCs introduce reliability risks due to SD card dependency and lack of hardware supervision. The ESP32 provides connectivity, memory, and processing capabilities, while the RP2040 acts as a co-processor enabling Raspberry Pi header compatibility and advanced peripheral interfacing. The design integrates external watchdog, supercapacitor-backed RTC, Ethernet, WiFi, and expandable flash, making it suitable for sealed enclosures, industrial deployments, and long-term unattended operation.",
    tags: [
      "ESP32",
      "RP2040",
      "Embedded Hardware",
      "PCB Design",
      "Industrial IoT",
      "Ethernet",
      "FreeRTOS",
    ],
    icon: Cpu,
    highlight: "Dual MCU",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1520175/espiff-v3-angle-02_jpg_md-xl_vEo2gKvi8U.jpg",
      },
    ],
    hidden: false,
    deliverables: [
      "Custom Dual-MCU PCB",
      "ESP32 + RP2040 System Architecture",
      "Raspberry Pi Form Factor Integration",
      "High-Reliability Hardware Design",
      "Multi-Interface Embedded Platform",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed a dual-microcontroller embedded system in Raspberry Pi form factor to address reliability limitations of Linux SBCs in continuous operation environments. The design enables reuse of Pi HATs and enclosures while replacing the software-heavy stack with a deterministic embedded architecture.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1520167/_7fhyhPxdZv.blob",
        ],
      },
      {
        heading: "System Architecture",
        body: "The platform combines a connectivity-focused MCU with a flexible co-processor to deliver both performance and interface compatibility.",
        bullets: [
          "ESP32 provides WiFi, Ethernet, flash, and PSRAM for application processing",
          "16 MB flash and 8 MB PSRAM support complex embedded workloads",
          "RP2040 acts as co-processor for GPIO and interface expansion",
          "40-pin header enables compatibility with Raspberry Pi HAT ecosystem",
          "Designed to operate without Linux for improved determinism and reliability",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1520180/espiff_v3_1_annotated_correct_V30zvmZa8C.png",
        ],
      },
      {
        heading: "Reliability Engineering",
        body: "A key objective was eliminating common failure points found in Raspberry Pi-based deployments, especially in unattended or industrial environments.",
        bullets: [
          "Eliminates SD-card dependency for storage",
          "External watchdog for system supervision",
          "Supercapacitor-backed real-time clock for resilience",
          "Designed for operation in sealed and low-airflow enclosures",
          "Suitable for long-duration and remote deployments",
        ],
      },
      {
        heading: "Hardware Capabilities",
        numbered: [
          {
            title: "Connected Processing Core",
            body: "The ESP32 integrates wireless connectivity, Ethernet, and large memory resources, enabling networked control, automation, and data processing in a compact embedded platform.",
          },
          {
            title: "RP2040 Co-Processor Layer",
            body: "The RP2040 extends system flexibility by handling GPIO, emulating Raspberry Pi header behavior, and enabling USB host/device functionality for peripherals such as storage and input devices.",
          },
          {
            title: "Memory & Expandability",
            body: "The design includes onboard flash plus external ISSI flash options up to 512 Mbit, enabling scalable storage for embedded applications.",
          },
        ],
      },
      {
        heading: "Power & Deployment",
        bullets: [
          "USB-C input supporting up to 5V / 3A",
          "Direct 24V power input option",
          "Compatible with PoE HAT for network-powered deployment",
          "Supports power-hungry HAT modules",
        ],
      },
      {
        heading: "Mechanical & Integration",
        body: "The system was intentionally designed to integrate seamlessly into the existing Raspberry Pi ecosystem while improving deployment robustness.",
        bullets: [
          "Compatible with Raspberry Pi 4 enclosures (metal, DIN rail, plastic)",
          "External antenna via uFL connector for use in shielded enclosures",
          "Suitable for industrial and waterproof installations",
          "Maintains Pi ecosystem compatibility while improving reliability",
        ],
      },
      {
        heading: "Software Ecosystem",
        bullets: [
          "Arduino IDE support for both ESP32 and RP2040",
          "Compatible with Espressif IDF and Pico SDK",
          "Supports MicroPython and JavaScript environments",
          "RTOS support including FreeRTOS and Apache NuttX",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The final platform delivers a robust embedded alternative to Raspberry Pi for applications where reliability, enclosure compatibility, and deterministic operation are critical. It demonstrates strong system-level design across hardware architecture, power integration, mechanical compatibility, and long-term deployment considerations.",
      },
    ],
  },
  {
    slug: "d3f8a1",
    title: "Autonomous Multi-Parameter Environmental Monitoring Node",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],

    description:
      "Battery-powered environmental monitoring node measuring temperature, humidity, pressure, and air quality with long автономous operation and USB-C charging.",

    longDescription:
      "Designed a compact, low-power environmental monitoring node using ESP32-C3 for continuous sensing in resource-constrained environments. The system integrates multiple environmental sensors to capture temperature, humidity, pressure, and air quality data while maintaining extended battery life. Built with a dual power architecture, it supports both USB-C charging and autonomous battery operation, ensuring reliability during power outages. The design emphasizes accessibility, low cost, and energy efficiency, making it suitable for home monitoring, agriculture, and remote deployments.",

    tags: [
      "ESP32-C3",
      "Environmental Monitoring",
      "IoT",
      "Low Power Design",
      "Battery Systems",
      "Sensor Integration",
      "Embedded Systems",
    ],

    icon: Activity,
    highlight: "Low-Power Sensing",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1906929/_KOoa1uyXuP.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "Custom ESP32-C3 Embedded Node",
      "Multi-Sensor Integration (BME280 + SPG40)",
      "Battery + USB-C Power System",
      "Low-Power Firmware Design",
      "Compact PCB Layout",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a compact environmental monitoring node designed for continuous operation in power-constrained environments. The system collects multiple environmental parameters and maintains reliable operation during unstable power conditions through an integrated battery-backed design.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1897336/top_Hf5nqdZawZ.png",
        ],
      },

      {
        heading: "System Architecture",
        body:
          "The design combines sensing, processing, and power management into a single compact embedded platform optimized for long-term deployment.",
        bullets: [
          "ESP32-C3 used for processing and connectivity",
          "Integrated environmental sensing for multiple parameters",
          "Compact PCB optimized for space and efficiency",
          "Designed for autonomous operation without external dependency",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1897337/top_eDCRyNSZDF.png",
          "https://hackster.imgix.net/uploads/attachments/1897338/bottom_XEytMuRQuM.png",
        ],
      },

      {
        heading: "Power System Design",
        body:
          "A dual power architecture ensures reliable operation in environments with unstable power availability.",
        bullets: [
          "Rechargeable lithium battery for автономous operation",
          "USB-C interface for power input and charging",
          "High-efficiency regulator (~95%) for extended battery life",
          "Supports continuous operation during outages",
        ],
      },

      {
        heading: "Sensor Integration",
        body:
          "The system integrates multiple sensors to provide comprehensive environmental insights.",
        bullets: [
          "BME280 for temperature, humidity, and pressure monitoring",
          "SPG40 sensor for air quality and CO2 estimation",
          "Designed for both indoor and outdoor use cases",
          "Supports applications in agriculture, home monitoring, and health",
        ],
      },

      {
        heading: "Low-Power Optimization",
        body:
          "Energy efficiency is a core design objective, enabling extended автономous operation.",
        bullets: [
          "Optimized power consumption for long battery life",
          "Estimated runtime of 15–20 days on 500mAh battery",
          "Efficient regulator and system-level power management",
          "Designed for continuous unattended operation",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1897335/bottom_AAX3d5pK0x.png",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates practical embedded system design under real-world constraints, combining low-power electronics, sensor integration, and resilient power architecture. It highlights the ability to engineer cost-effective, автономous solutions for environmental monitoring and IoT deployment.",
      },
    ],
  },
  {
    slug: "a8c3f2",
    title: "Custom Edge Compute Carrier Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-linux-bsp"],

    description:
      "Custom carrier board enabling edge computing modules with Raspberry Pi form-factor compatibility and extended peripheral support.",

    longDescription:
      "Designed a custom carrier platform for an edge computing system-on-module, focusing on compatibility, flexibility, and high-speed peripheral integration. The board adopts a Raspberry Pi–compatible form factor to leverage existing ecosystems while enabling advanced compute capabilities. The design includes Ethernet, USB, JTAG/UART interfaces, SD storage, and a fully accessible GPIO architecture routed to programmable logic. Emphasis was placed on layout constraints, connector alignment, power sequencing, and integration of high-speed interfaces, resulting in a compact multi-layer PCB suitable for embedded AI and robotics applications.",

    tags: [
      "PCB Design",
      "Carrier Board",
      "Edge Computing",
      "High-Speed Design",
      "Embedded Systems",
      "KiCad",
      "FPGA Systems",
    ],

    icon: Cpu,
    highlight: "Carrier Board Design",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1819404/_zJ41sg2WrV.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "Custom Carrier Board Architecture",
      "Multi-Interface Hardware Design",
      "High-Speed PCB Layout",
      "Peripheral Integration System",
      "Edge Compute Platform Design",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a custom carrier platform tailored for edge computing modules, designed to combine high-performance processing with a familiar and widely supported hardware ecosystem. The system enables reuse of existing accessories while extending functionality through custom hardware integration.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1816674/mockup_6JvfupHzEW.png",
        ],
      },

      {
        heading: "System Architecture",
        body:
          "The platform integrates multiple high-speed and standard interfaces into a compact form factor, enabling flexible deployment across robotics and edge AI applications.",
        bullets: [
          "Ethernet interface for high-speed networking",
          "USB subsystem for peripheral connectivity",
          "Dedicated JTAG and UART debugging interfaces",
          "SD card interface for storage and boot",
          "40-pin GPIO header for expansion and customization",
        ],
      },

      {
        heading: "Core Hardware Integration",
        numbered: [
          {
            title: "Module Connector Interface",
            body:
              "Integrated high-density board-to-board connectors to interface with the compute module, routing all critical signals while maintaining layout integrity.",
            image: "https://hackster.imgix.net/uploads/attachments/1818756/som_connectors_mJpzpMsKbH.png",
          },
          {
            title: "Ethernet Subsystem",
            body:
              "Implemented a gigabit-capable Ethernet interface using a dedicated PHY and RJ45 connector, ensuring reliable high-speed communication.",
            image: "https://hackster.imgix.net/uploads/attachments/1818757/ethernet_cq1MeWKds3.png",
          },
          {
            title: "Debug & Programming Interface",
            body:
              "Integrated USB-based debugging with FTDI along with a direct JTAG interface for flexible programming and diagnostics.",
            image: "https://hackster.imgix.net/uploads/attachments/1818759/ftdi_wnqTE2RjpX.png",
          },
        ],
      },

      {
        heading: "Peripheral Integration",
        body:
          "The design extends system functionality through multiple integrated peripheral interfaces.",
        bullets: [
          "USB PHY for external device connectivity",
          "GPIO routed to programmable logic for flexibility",
          "Standard expansion header compatibility",
          "Modular peripheral architecture",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1818763/usb_phy_Au69HL294v.png",
          "https://hackster.imgix.net/uploads/attachments/1818764/periph_connectors_nER2srhq72.png",
        ],
      },

      {
        heading: "GPIO & System Flexibility",
        body:
          "All GPIO signals are routed to programmable logic, enabling full reconfigurability and custom interface design.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1819180/rpi_gpio_uhy8PyvFFw.png",
        ],
      },

      {
        heading: "Storage Interface",
        body:
          "Integrated SD card circuitry for system boot and data storage using proven reference design patterns.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1818765/sd_card_gXRYhJ7V29.png",
        ],
      },

      {
        heading: "PCB Layout & Constraints",
        body:
          "The layout required careful handling of connector alignment, mechanical constraints, and high-density routing within a compact form factor.",
        bullets: [
          "Multi-layer PCB design for signal integrity",
          "Precise connector spacing and mechanical alignment",
          "Compact routing under space constraints",
          "Optimized placement for dense component layout",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1818768/layout0_hnjUD4cAXc.png",
          "https://hackster.imgix.net/uploads/attachments/1818790/layout1_i8TyWDEqdK.png",
          "https://hackster.imgix.net/uploads/attachments/1819191/layout2_6nYmrYTYvF.png",
          "https://hackster.imgix.net/uploads/attachments/1819405/layout5_AB0xAZ8wK4.png",
          "https://hackster.imgix.net/uploads/attachments/1819406/layout6_8NQwHBBEek.png",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates advanced PCB design and system integration skills, including high-speed interface design, multi-layer routing, and hardware platform development for edge computing systems. It highlights the ability to design complex carrier architectures for scalable embedded and AI applications.",
      },
    ],
  },
  {
    slug: "b7f4d1",
    title: "FPGA-Based Robotic Motion Control System",
    category: "FPGA & Embedded AI",
    filterSlugs: ["fpga", "robotics", "embedded-systems"],

    description:
      "RTL-based motor control system using FPGA for precise dual-motor synchronization with encoder feedback.",

    longDescription:
      "Designed and implemented a real-time motor control system on FPGA using Verilog, enabling precise control of dual DC motors with encoder feedback. The system integrates PWM generation, quadrature decoding, and a custom lead-follow PID control algorithm to ensure synchronized motion. Compared to traditional microcontroller-based solutions, the FPGA implementation provides deterministic timing, parallel processing, and low-latency control, making it suitable for robotics and real-time embedded applications.",

    tags: [
      "FPGA",
      "Verilog",
      "RTL Design",
      "Robotics",
      "Motor Control",
      "PID Control",
      "Embedded Systems",
    ],

    icon: Cpu,
    highlight: "FPGA Motor Control",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1857569/_kVlac0BHjL.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "RTL Motor Control System",
      "FPGA-Based PID Controller",
      "Quadrature Encoder Decoder",
      "PWM Signal Generation",
      "Robotic Motion Control Architecture",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed an FPGA-based motor control system capable of driving and synchronizing two DC motors with encoder feedback. The system leverages hardware-level parallelism to achieve deterministic timing and high-performance control for robotics applications.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1859206/image_f1yG9kGWmq.png",
        ],
      },

      {
        heading: "System Architecture",
        body:
          "The design integrates multiple hardware modules within the FPGA to enable real-time motor control and feedback processing.",
        bullets: [
          "PWM generation for motor speed control",
          "Encoder-based feedback system",
          "Dual motor synchronization logic",
          "RC input interface for control signals",
          "Real-time processing using FPGA parallelism",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1859208/image_jbejuB65tr.png",
          "https://hackster.imgix.net/uploads/attachments/1859220/image_ZFQ1VlIRGN.png",
        ],
      },

      {
        heading: "Motor Driver & Hardware Interface",
        body:
          "Integrated an H-bridge motor driver with FPGA-generated control signals to drive dual DC motors efficiently.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1858478/image_JqvbsDhzQo.png",
          "https://hackster.imgix.net/uploads/attachments/1859139/image_xEmklyzqqW.png",
        ],
      },

      {
        heading: "Encoder Feedback System",
        body:
          "Implemented quadrature decoding logic to determine motor speed and direction using Hall-effect encoder signals.",
        bullets: [
          "Dual-channel encoder signal processing",
          "Direction detection via phase difference",
          "Velocity estimation using pulse frequency",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1859396/image_4NxKxJnSJY.png",
        ],
      },

      {
        heading: "Control Algorithm (PID)",
        body:
          "Designed a custom lead-follow PID control algorithm to synchronize motor speeds by dynamically adjusting PWM duty cycles based on encoder feedback.",
        bullets: [
          "Real-time error computation between motors",
          "Velocity difference compensation",
          "Integral component for stability and damping",
          "Discrete-time control implementation in RTL",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1860789/image_GzkVBfZlVm.png",
        ],
      },

      {
        heading: "RTL Design & Implementation",
        body:
          "Implemented the system in Verilog using modular design principles and state machines for sequential computations.",
        bullets: [
          "Modular RTL architecture",
          "State machine-based control logic",
          "Clock domain handling and timing control",
          "Simulation and verification in Vivado",
        ],
      },

      {
        heading: "System Validation",
        body:
          "Validated the control system using simulation models and real hardware testing, refining parameters to achieve stable and synchronized motion.",
      },

      {
        heading: "Robotic System Integration",
        body:
          "Integrated the FPGA motor controller into a mobile robot platform including power distribution, chassis design, and mechanical assembly.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1860832/image_VxMtP0w2lN.png",
          "https://hackster.imgix.net/uploads/attachments/1860863/image_6Yu4senJgF.png",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates advanced FPGA-based control system design, combining RTL development, real-time signal processing, and robotics integration. It highlights expertise in hardware-level control, feedback systems, and embedded robotics architecture.",
      },
    ],
  },
  {
    slug: "e2b7c9",
    title: "High-Speed Error Correction Engine (RTL)",
    category: "FPGA & Embedded AI",
    filterSlugs: ["fpga", "digital-design", "verification"],

    description:
      "High-throughput error correction system implemented in RTL with continuous data processing and formal verification.",

    longDescription:
      "Designed and implemented a high-throughput error correction system using RTL, capable of producing one valid output per clock cycle. The architecture leverages time-division multiplexing of multiple decoding units to sustain continuous data flow. A serial data interface is used for high-speed communication, while a valid-ready protocol ensures synchronization between encoder and decoder. The system is formally verified using model checking techniques to guarantee correctness under all input conditions, including error injection scenarios.",

    tags: [
      "FPGA",
      "RTL Design",
      "Verilog",
      "Digital Design",
      "Formal Verification",
      "Error Correction",
      "High Throughput Systems",
    ],

    icon: Cpu,
    highlight: "Error Correction RTL",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1754169/_LA3kmP6sBI.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "RTL Encoder & Decoder Design",
      "High-Throughput Data Pipeline",
      "Formal Verification Model",
      "FPGA Implementation",
      "Error Injection & Validation Framework",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a high-performance error correction system capable of processing continuous input data streams with minimal latency. The design ensures reliable communication by detecting and correcting transmission errors in real time.",
      },

      {
        heading: "System Architecture",
        body:
          "The system consists of a serial encoder, a high-throughput decoder, and a channel model for validation.",
        bullets: [
          "Bit-serial data transmission for high-speed operation",
          "Valid-ready handshake protocol for synchronization",
          "Continuous pipeline processing with output per cycle",
          "Time-division multiplexing for throughput optimization",
        ],
      },

      {
        heading: "Encoder Design",
        body:
          "The encoder converts parallel input data into a serialized format while generating parity information for error detection.",
        bullets: [
          "Parallel-in serial-out architecture",
          "Finite state machine for data and parity generation",
          "Syndrome computation during message processing",
          "Optimized for continuous data streaming",
        ],
      },

      {
        heading: "Decoder Architecture",
        body:
          "The decoder reconstructs original data and corrects errors using syndrome analysis and feedback logic.",
        bullets: [
          "Linear feedback shift register for syndrome generation",
          "Error position detection via combinational logic",
          "Parallel output reconstruction using buffer registers",
          "Dual-decoder time multiplexing for maximum throughput",
        ],
      },

      {
        heading: "Channel Modeling",
        body:
          "A configurable channel model simulates real-world transmission errors for validation and testing.",
        bullets: [
          "Single and double bit error injection",
          "Configurable error rate control",
          "Used for both simulation and hardware testing",
        ],
      },

      {
        heading: "Formal Verification",
        body:
          "The system is formally verified using model checking techniques to ensure correctness across all possible input scenarios.",
        bullets: [
          "Assertions validating error correction behavior",
          "Proof of single-bit error correction",
          "Detection of multi-bit error conditions",
          "Latency guarantees for encoder and decoder",
          "Liveness verification to ensure no deadlock",
        ],
      },

      {
        heading: "FPGA Implementation",
        body:
          "The design is synthesized and deployed on FPGA hardware for real-time validation.",
        bullets: [
          "RTL implementation using Verilog",
          "Simulation and synthesis using Vivado",
          "Hardware validation on FPGA board",
          "End-to-end system verification with real signals",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates advanced digital design and verification skills, including high-throughput architecture design, RTL implementation, and formal verification. It highlights the ability to build reliable, high-performance data processing systems suitable for communication and safety-critical applications.",
      },
    ],
  },
  {
    slug: "c2f6a8",
    title: "Cross-Platform AI Acceleration Pipeline",
    category: "Embedded Linux & BSP",
    filterSlugs: ["embedded-linux-bsp", "iot-connected-devices"],
    description:
      "Ported an edge AI inference pipeline from Jetson Nano to TI TDA4VM, leveraging hardware accelerators to reduce inference latency and improve edge deployment efficiency.",
    longDescription:
      "Ported an existing edge machine vision inference workflow from the NVIDIA Jetson Nano to the Texas Instruments SK-TDA4VM platform, focusing on hardware-aware optimization for embedded AI deployment. The original implementation executed a TensorFlow Lite SSD MobileNet model on the Jetson Nano CPU, while the target TDA4VM platform required model compilation through TI’s TIDL toolchain to utilize dedicated deep learning accelerators. The workflow included adapting model artifacts, setting up a compatible compilation environment, generating optimized deployment outputs, and integrating them into the target runtime. The final result demonstrated a major reduction in inference latency, highlighting the performance advantage of accelerator-aware edge AI pipelines.",
    tags: [
      "Edge AI",
      "TensorFlow Lite",
      "TDA4VM",
      "Jetson Nano",
      "Embedded Linux",
      "Model Optimization",
      "TIDL",
    ],
    icon: Cpu,
    highlight: "AI Model Porting",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1541958/_unlI3boDdj.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "Cross-Platform AI Porting Workflow",
      "TIDL Compilation Setup",
      "Optimized Inference Deployment",
      "Latency Benchmarking",
      "TDA4VM Integration",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Migrated an edge machine learning workflow from Jetson Nano to the TI SK-TDA4VM starter kit to evaluate how a CPU-bound inference pipeline can be reworked for a heterogeneous accelerator-based platform. The project focused on preserving the original model flow while adapting it for hardware-optimized execution.",
      },
      {
        heading: "Source Platform",
        body: "The starting point was a Jetson Nano-based TensorFlow Lite inference workflow running SSD MobileNet V1 on resized COCO images using CPU execution.",
        bullets: [
          "Jetson Nano development kit used as baseline platform",
          "Python 3.6 workflow based on JetPack 4.5",
          "Model: SSD MobileNet V1 (TensorFlow Lite)",
          "Input set: 20 resized COCO17 images",
          "Average latency: 223 ms per inference",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1541944/dsc_7551_WZqr6P6Slb.JPG",
        ],
      },
      {
        heading: "Target Platform",
        body: "The TI SK-TDA4VM introduces a different execution model built around dedicated deep learning, vision, and multimedia accelerators.",
        bullets: [
          "Dual-core Arm Cortex-A72 CPU",
          "Dedicated DSP and deep learning accelerators",
          "4 GB LPDDR4 memory",
          "Expanded I/O and PCIe support",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1541946/dsc_8678006_kEPDnhO7T0.jpg",
        ],
      },
      {
        heading: "Optimization Workflow",
        numbered: [
          {
            title: "Compilation Environment",
            body: "Configured TI’s edgeai-tidl-tools environment under Ubuntu/WSL2 to enable model compilation.",
          },
          {
            title: "Model Conversion",
            body: "Converted TensorFlow Lite model into TIDL-compatible artifacts for accelerator execution.",
          },
          {
            title: "Deployment",
            body: "Transferred compiled artifacts to the target board and integrated into runtime pipeline.",
          },
        ],
      },
      {
        heading: "Performance Results",
        body: "Migration demonstrated significant gains from accelerator-based execution.",
        bullets: [
          "Jetson Nano: 223 ms per inference",
          "TDA4VM: 9 ms per inference",
          "Speedup: ~24×",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1547665/image_jtAmQ78BXZ.png",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates effective cross-platform AI deployment and the importance of aligning model execution with hardware accelerators for real-world edge performance.",
      },
    ],
  },
  {
    slug: "f6b2e9",
    title: "Adaptive Solar Energy Harvesting & Battery Charging Module",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "power-electronics"],

    description:
      "Solar-powered battery charging system with MPPT-based energy harvesting and efficient Li-ion charging control.",

    longDescription:
      "Designed a compact solar-powered charging module for Li-ion batteries using adaptive power tracking techniques. The system optimizes energy extraction from solar panels by dynamically adjusting operating conditions to maximize power transfer. It integrates constant-current/constant-voltage charging, thermal regulation, and multiple protection features into a compact PCB form factor. The design supports standalone operation and is optimized for efficiency, reliability, and compatibility with portable energy systems.",

    tags: [
      "Power Electronics",
      "MPPT",
      "Battery Charging",
      "Solar Energy",
      "PCB Design",
      "Embedded Systems",
      "Energy Systems",
    ],

    icon: Sun,
    highlight: "Solar Battery Charging",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1826653/mini_img_1847_h29U195Xfd.jpg",
      },
    ],

    hidden: false,

    deliverables: [
      "MPPT-Based Charging Module",
      "Li-ion Charging Circuit Design",
      "Protection & Safety Integration",
      "Custom PCB Layout",
      "Standalone Power System Design",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a solar-powered battery charging module capable of efficiently harvesting energy from variable input sources and safely charging Li-ion batteries. The system is designed for standalone operation in portable and off-grid applications.",
      },

      {
        heading: "Core Design Concept",
        body:
          "The system uses adaptive energy tracking to maximize power extraction from solar panels while maintaining safe battery charging conditions.",
        bullets: [
          "Dynamic power tracking for solar input optimization",
          "Standalone operation without microcontroller",
          "Compact form factor for portable applications",
          "High efficiency under varying light conditions",
        ],
      },

      {
        heading: "Charging System Architecture",
        body:
          "Implements a full Li-ion charging cycle including protection and efficiency optimization.",
        bullets: [
          "Constant-current / constant-voltage charging",
          "Automatic recharge and termination logic",
          "Undervoltage lockout and safety mechanisms",
          "Thermal regulation during high load conditions",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1826652/screenshot_2025_03_03-2_LMhn1dDmBu.png",
        ],
      },

      {
        heading: "Hardware Design",
        numbered: [
          {
            title: "Energy Conversion Stage",
            body:
              "Implements adaptive charging control using an integrated controller with built-in power MOSFET, eliminating the need for external current sensing components.",
            image: "https://hackster.imgix.net/uploads/attachments/1826653/mini_img_1847_h29U195Xfd.jpg",
          },
          {
            title: "Protection Circuitry",
            body:
              "Includes input surge protection, polarity protection, and battery safety mechanisms to ensure reliable operation.",
            image: "https://hackster.imgix.net/uploads/attachments/1826651/screenshot_2025_02_28-6_iBUpGwL0BM.png",
          },
          {
            title: "Input Interface",
            body:
              "Supports both solar input and USB-C interface for flexible power sourcing.",
          },
        ],
      },

      {
        heading: "PCB Design",
        body:
          "The PCB layout is optimized for current handling, thermal management, and signal integrity.",
        bullets: [
          "Optimized trace width for high current flow",
          "Thermal-aware component placement",
          "Compact layout matching common charger form factors",
          "Noise minimization through layout segmentation",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1826650/screenshot_2025_02_28-9_epByvg4gni.png",
        ],
      },

      {
        heading: "Assembly & Integration",
        body:
          "The module is assembled using standard PCB techniques with careful component placement for reliability.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1826649/mini_2020_0102_004534_002_TpUUFMIr3U.JPG",
        ],
      },

      {
        heading: "Testing & Validation",
        body:
          "The system was tested under both solar and direct input conditions to validate efficiency and safety.",
        bullets: [
          "Battery charging validation under controlled conditions",
          "Thermal performance testing",
          "Efficiency evaluation (~94% peak)",
          "Protection feature verification",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates advanced power electronics design, including energy harvesting, battery charging systems, and protection mechanisms. It highlights the ability to design efficient standalone power modules for renewable energy and portable applications.",
      },
    ],
  },
  {
    slug: "a4d9e2",
    title: "Analog Solar Charging & Voltage Regulation Circuit",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "power-electronics"],

    description:
      "Analog solar charging circuit with adjustable output voltage and linear regulation for battery charging applications.",

    longDescription:
      "Designed a low-dropout analog solar charging circuit using discrete components to regulate and control battery charging from a variable solar input. The system uses a P-channel MOSFET linear regulator combined with a differential amplifier to maintain stable output voltage. An adjustable potentiometer allows fine tuning of charging voltage, enabling compatibility with different battery types. The design emphasizes simplicity, reliability, and efficiency without relying on microcontrollers or complex control logic.",

    tags: [
      "Power Electronics",
      "Analog Design",
      "Solar Energy",
      "Voltage Regulation",
      "PCB Design",
      "Embedded Hardware",
    ],

    icon: Sun,
    highlight: "Analog Power Control",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1336226/_nJVd6N3DJJ.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "Analog Charging Circuit Design",
      "Adjustable Voltage Regulation System",
      "Discrete Component Implementation",
      "Custom PCB Layout",
      "Battery Charging Control System",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed an analog solar charging circuit capable of regulating battery charging voltage using discrete components. The system provides a simple and cost-effective solution for solar-powered battery charging applications.",
      },

      {
        heading: "Core Design Concept",
        body:
          "The design uses linear regulation to stabilize output voltage despite variations in solar input.",
        bullets: [
          "Low-dropout linear regulator architecture",
          "Adjustable output voltage via potentiometer",
          "Analog control without microcontroller dependency",
          "Cost-effective and easy-to-build design",
        ],
      },

      {
        heading: "Circuit Architecture",
        body:
          "The circuit integrates voltage sensing, amplification, and power regulation stages.",
        bullets: [
          "P-channel MOSFET used as series pass element",
          "Differential amplifier for voltage comparison",
          "Zener diode for reference voltage stabilization",
          "Passive components for filtering and stability",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1336222/schematic_diy_solar_charger_2021-08-15_cropped_Wz5lXXro5H.png",
        ],
      },

      {
        heading: "Power Characteristics",
        body:
          "The system is designed for moderate power solar charging applications.",
        bullets: [
          "Supports ~12V solar panel input",
          "Adjustable output range (7V – 14V)",
          "Handles up to ~4A current",
          "Low dropout voltage (~1.25V)",
        ],
      },

      {
        heading: "Protection & Indicators",
        body:
          "Includes basic protection and user feedback mechanisms.",
        bullets: [
          "Reverse polarity protection",
          "LED indicators for charging and regulation states",
          "Low battery discharge current (~1mA)",
        ],
      },

      {
        heading: "PCB Design",
        body:
          "The PCB is designed for practical implementation using through-hole components.",
        bullets: [
          "Simple layout for easy assembly",
          "Optimized for analog signal stability",
          "Supports rapid prototyping and DIY builds",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1336081/pcb_pcb_diy_solar_charger_2021-08-15_mqHFilrLOX.png",
          "https://hackster.imgix.net/uploads/attachments/1336076/pcb_pcb_diy_solar_charger_2021-08-15_full_YbFu5lYToM.png",
          "https://hackster.imgix.net/uploads/attachments/1336089/pcb_pcb_diy_solar_charger_2021-08-15_back_5CxAQZw3BH.png",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates strong understanding of analog circuit design and power electronics. It highlights the ability to build efficient, low-cost solar charging solutions using discrete components without relying on digital control systems.",
      },
    ],
  },
  {
    slug: "e9a4d7",
    title: "Autonomous Solar Power Management & Regulation System",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "power-electronics"],

    description:
      "Integrated solar power system with battery management, voltage regulation, and real-time energy monitoring.",

    longDescription:
      "Designed a fully integrated solar power management system capable of maintaining a continuously charged battery for remote deployments. The system seamlessly switches between solar input, external power, and battery while delivering a stable regulated output to embedded devices. It incorporates battery charging, fuel gauging, and high-efficiency buck-boost conversion to ensure reliable operation under varying environmental conditions. The architecture is optimized for long-term unattended operation in outdoor and off-grid applications.",

    tags: [
      "Power Electronics",
      "Solar Energy",
      "Battery Management",
      "Energy Systems",
      "PCB Design",
      "Embedded Systems",
    ],

    icon: Sun,
    highlight: "Power Management System",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/301798/img_0352_sPzaNzw4Qc.JPG",
      },
    ],

    hidden: false,

    deliverables: [
      "Solar Power Management System",
      "Battery Monitoring & Fuel Gauge Integration",
      "Buck-Boost Voltage Regulation",
      "Multi-Source Power Switching",
      "Custom PCB Design",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a complete solar-powered energy system designed for long-term deployment of embedded devices in outdoor environments. The system ensures continuous operation by intelligently managing multiple power sources and maintaining battery charge levels.",
      },

      {
        heading: "System Architecture",
        body:
          "The design integrates charging, regulation, monitoring, and power switching into a single embedded platform.",
        bullets: [
          "Solar and DC input charging integration",
          "Automatic switching between power sources",
          "Stable regulated output for embedded systems",
          "Continuous battery monitoring and protection",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/302069/screen_shot_2017-05-09_at_9_09_43_am_ElmXnIby3B.png",
        ],
      },

      {
        heading: "Charging & Power Control",
        body:
          "The system manages battery charging from multiple sources while ensuring safe operation.",
        bullets: [
          "Integrated LiPo charging controller",
          "Automatic charge regulation based on input conditions",
          "Thermal-aware charging control",
          "Safe handling of varying solar input levels",
        ],
      },

      {
        heading: "Voltage Regulation",
        body:
          "A high-efficiency buck-boost converter ensures consistent output regardless of input or battery conditions.",
        bullets: [
          "Stable 4.2V output for microcontroller systems",
          "Handles wide input voltage range",
          "High-efficiency energy conversion",
          "Supports dynamic load conditions",
        ],
      },

      {
        heading: "Battery Monitoring",
        body:
          "Integrated fuel gauge provides real-time insight into battery status and system health.",
        bullets: [
          "State-of-charge monitoring via I2C",
          "Accurate battery voltage measurement",
          "Automatic load cutoff at critical levels",
          "Supports intelligent power management decisions",
        ],
      },

      {
        heading: "PCB Design & Implementation",
        body:
          "The PCB is designed for reliable operation with attention to power routing, thermal performance, and manufacturability.",
        bullets: [
          "Custom fabricated PCB for compact integration",
          "Optimized layout for power and signal separation",
          "Designed for assembly using reflow techniques",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/302071/screen_shot_2017-05-09_at_9_13_57_am_LINGIRGpG6.png",
          "https://hackster.imgix.net/uploads/attachments/302052/screen_shot_2017-05-09_at_7_40_56_am_3zij1uOsZ2.png",
        ],
      },

      {
        heading: "Real-World Deployment",
        body:
          "The system is deployed in outdoor environments powering connected sensors, demonstrating long-term reliability and автономous operation.",
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates advanced system-level power electronics design, combining energy harvesting, battery management, voltage regulation, and monitoring into a single platform. It highlights the ability to design robust, autonomous energy systems for real-world embedded deployments.",
      },
    ],
  },
  {
    slug: "d7b3a9",
    title: "Distributed Sensor Monitoring & Alert System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],

    description:
      "Multi-node IoT system for real-time sensor monitoring with cloud dashboard integration and automated alerting.",

    longDescription:
      "Developed a distributed IoT monitoring system that collects environmental and motion data from multiple sensor nodes and streams it to a cloud-based dashboard. The system enables real-time visualization and automated alerts through messaging services. It integrates microcontroller-based sensor acquisition, WiFi communication, cloud data pipelines, and dashboard visualization into a complete end-to-end IoT architecture suitable for smart home and monitoring applications.",

    tags: [
      "IoT",
      "Embedded Systems",
      "WiFi",
      "Cloud Integration",
      "Sensor Systems",
      "Data Streaming",
      "Real-Time Monitoring",
    ],

    icon: Activity,
    highlight: "IoT Monitoring System",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/image/file/44322/TM4C123G.jpg",
      },
    ],

    hidden: false,

    deliverables: [
      "Multi-Node Sensor System",
      "Cloud Data Pipeline Integration",
      "Real-Time Dashboard",
      "Automated Alert System",
      "Embedded Firmware (WiFi + REST)",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a distributed IoT platform that aggregates sensor data from multiple devices and presents it through a centralized dashboard with real-time updates and alert capabilities.",
      },

      {
        heading: "System Architecture",
        body:
          "The system integrates embedded hardware, wireless communication, and cloud services into a unified monitoring platform.",
        bullets: [
          "Microcontroller-based sensor nodes",
          "WiFi communication using embedded network stacks",
          "Cloud-based data streaming via REST APIs",
          "Dashboard visualization for real-time monitoring",
        ],
        images: [
          "/images/Dashboard_1.jpg",
          "/images/Dashboard_2.jpg",
        ],
      },

      {
        heading: "Sensor Integration",
        body:
          "The platform supports multiple sensor types for environmental and motion monitoring.",
        bullets: [
          "Motion detection using IR sensors",
          "Environmental sensing (temperature, humidity)",
          "IMU-based activity detection",
          "Expandable sensor architecture",
        ],
        images: [
          "https://hackster.imgix.net/uploads/image/file/44323/Esquilio_with_sensors.jpg",
          "https://hackster.imgix.net/uploads/image/file/44322/TM4C123G.jpg",
        ],
      },

      {
        heading: "Cloud & Data Pipeline",
        body:
          "Sensor data is transmitted to cloud services and visualized through a real-time dashboard.",
        bullets: [
          "REST-based data transmission to cloud endpoints",
          "Data streaming to Dweet.io platform",
          "Dashboard visualization using Freeboard.io",
          "Multi-device data aggregation",
        ],
      },

      {
        heading: "Alert System",
        body:
          "The system provides automated alerts based on sensor conditions.",
        bullets: [
          "Event-triggered alerts for motion detection",
          "Weather-based notifications",
          "SMS notifications using external APIs",
          "Threshold-based monitoring logic",
        ],
      },

      {
        heading: "Firmware Implementation",
        body:
          "Embedded firmware handles sensor acquisition, data processing, and communication.",
        bullets: [
          "WiFi connectivity and network handling",
          "Sensor data acquisition and filtering",
          "REST API communication with cloud services",
          "Event-driven alert logic implementation",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates full-stack IoT system design, combining embedded hardware, wireless communication, cloud integration, and real-time data visualization. It highlights the ability to build scalable monitoring systems with automated alerting for real-world applications.",
      },
    ],
  },
  {
    slug: "6b2f9a",
    title: "Embedded Prototyping Hardware Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Custom ESP32 development board with improved power input, programming interface, and usability for embedded projects.",
    longDescription:
      "Designed and refined a custom ESP32-based development board in Arduino Uno form factor, focusing on usability, power handling, and real-world deployment. Revision 2.0 introduces key improvements over the initial design, including a DC barrel power connector, a dedicated programming header with auto reset/flash circuitry, and enhanced decoupling for improved voltage stability. The board is optimized for both rapid prototyping and permanent installations, addressing practical limitations identified during extensive use of the first revision.",
    tags: [
      "ESP32",
      "PCB Design",
      "Embedded Systems",
      "Hardware Design",
      "Power Electronics",
      "IoT",
    ],
    icon: Cpu,
    highlight: "Custom PCB Design",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1605093/_mi0rAzkkTd.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "Custom PCB Layout & Routing",
      "Rev 2.0 Hardware Design",
      "Programming Interface Circuit",
      "Power Input Design",
      "Assembly & Validation",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a custom ESP32 development board in Arduino Uno form factor, focusing on improving usability and reliability for everyday embedded development. The project evolved through real-world usage, leading to a refined second revision addressing practical design limitations.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1605095/image_POeRWSnGb3.png",
        ],
      },
      {
        heading: "Design Evolution",
        body: "The initial revision focused on minimalism, but real-world usage revealed missing features that limited usability in practical applications.",
        bullets: [
          "Rev 1.0 omitted USB interface and dedicated power connector",
          "OTA programming used to reduce hardware complexity",
          "External wiring required for power during development",
          "User experience highlighted need for integrated interfaces",
        ],
      },
      {
        heading: "Hardware Improvements",
        body: "Revision 2.0 introduces several key enhancements to improve usability and robustness.",
        bullets: [
          "DC barrel connector for stable external power input",
          "6-pin programming header for external USB-to-serial interface",
          "Auto reset/flash circuit using transistor-based design",
          "Additional decoupling capacitors for voltage stability",
          "Improved PCB routing and thermal considerations",
        ],
      },
      {
        heading: "Power Design",
        body: "The board uses a linear regulator for 3.3V supply, with considerations for future improvements.",
        bullets: [
          "3.3V LDO regulator for ESP32 supply",
          "Supports 7.2V–12V input via barrel jack",
          "Handles moderate load but limited to ~800mA",
          "Future plan: switch to buck converter for higher efficiency",
        ],
      },
      {
        heading: "Assembly Process",
        body: "The board was assembled using standard PCB prototyping techniques.",
        bullets: [
          "Stencil-based solder paste application",
          "Component placement within minutes",
          "Hotplate reflow at ~223°C",
          "Manual inspection for solder defects",
          "Through-hole component finishing",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1605099/image_tdlmsDBCBY.png",
          "https://hackster.imgix.net/uploads/attachments/1605101/image_Vb2G43zPK5.png",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates iterative hardware design driven by real-world usage. It highlights experience in PCB layout, power system design, embedded hardware integration, and practical usability improvements across hardware revisions.",
      },
    ],
  },
  {
    slug: "8c4d2f",
    title: "Wireless Multi-Input Flight Controller",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "Embedded drone control system using ESP32 with WiFi, gesture input, and gamepad support for real-time flight control.",
    longDescription:
      "Developed a standalone embedded drone controller using ESP32 to interface with the DJI Tello drone via its WiFi-based API. The system supports multiple input modalities including physical buttons, gesture-based control using an MPU6050, and Bluetooth gamepad integration. A captive portal-based WiFi configuration system allows seamless drone pairing without manual setup. The controller provides real-time feedback through LEDs, OLED display, and onboard controls, enabling intuitive and flexible flight operation. The architecture separates communication, input handling, and control logic to support extensibility and future features such as voice control.",
    tags: [
      "ESP32",
      "Drone Control",
      "IoT",
      "WiFi",
      "Embedded Systems",
      "MPU6050",
      "Robotics",
    ],
    icon: Wifi,
    highlight: "Drone Control System",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1617714/_fX8bRTRZXj.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "ESP32 Firmware",
      "Tello API Integration",
      "Gesture Control System",
      "Gamepad Interface (Bluetooth)",
      "WiFi Captive Portal Setup",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a standalone embedded controller for the DJI Tello drone using ESP32, enabling wireless control through multiple input methods including buttons, gestures, and gamepads. The system focuses on usability, flexibility, and modular architecture.",
      },
      {
        heading: "Hardware System",
        body: "The controller integrates sensing, feedback, and control hardware into a compact embedded platform.",
        bullets: [
          "ESP32 microcontroller for processing and WiFi communication",
          "MPU6050 for gesture-based control",
          "OLED display for status and feedback",
          "LED indicators for connection and battery status",
          "Push buttons for flight actions (takeoff, land, emergency stop)",
          "LiPo battery-powered portable system",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1618010/sampleassembledcontroller_FJ8MsyUhnH.png",
        ],
      },
      {
        heading: "Drone & Input Devices",
        body: "The system supports multiple drone models and user input devices for flexible operation.",
        bullets: [
          "Compatible with Tello, Tello EDU, and Tello Talent drones",
          "Supports PS3, PS4, Switch, and 8BitDo gamepads",
          "Fallback control via onboard buttons and gestures",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1618009/whitetello_wI2Z3XGB66.png",
          "https://hackster.imgix.net/uploads/attachments/1618012/ps4red_oBsDN2kTgP.png",
        ],
      },
      {
        heading: "System Architecture",
        body: "The controller communicates with the drone over WiFi using the Tello SDK, while handling input processing locally.",
        bullets: [
          "ESP32 connects directly to Tello WiFi network",
          "Commands sent using Tello UDP-based API",
          "Separation between input handling and command generation",
          "Real-time control loop for responsive flight behavior",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1617718/samplecontrollerlayout_oAccSVZ36v.png",
        ],
      },
      {
        heading: "Gesture Control",
        body: "Gesture-based flight control is implemented using onboard motion sensing.",
        bullets: [
          "MPU6050 detects tilt direction",
          "Mapped to directional flight commands",
          "Enables intuitive hands-on control",
          "Reduces dependency on external controllers",
        ],
      },
      {
        heading: "WiFi Configuration",
        body: "A captive portal simplifies pairing between the controller and drone.",
        bullets: [
          "ESP32 hosts WiFi configuration portal",
          "User selects Tello SSID from list",
          "Automatic connection and binding",
          "No manual configuration required",
        ],
      },
      {
        heading: "Software System",
        body: "Firmware is built using Arduino framework with multiple integrated libraries.",
        bullets: [
          "ESP32 support via Arduino Board Manager",
          "MPU6050 and OLED libraries for sensor/UI integration",
          "Bluepad32 library for Bluetooth gamepad support",
          "Modular firmware for progressive feature development",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The project demonstrates a complete embedded robotics control system integrating wireless communication, human interfaces, and real-time control. It highlights experience in ESP32 networking, multi-input control design, and system-level architecture for interactive embedded applications.",
      },
    ],
  },
  {
    slug: "c5e8a2",
    title: "Multi-Channel Intelligent Lighting Control System",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],

    description:
      "Embedded lighting control system with multi-channel PWM control, constant current driving, and RS485 communication support.",

    longDescription:
      "Designed a multi-channel lighting control system capable of driving high-power LEDs using constant current regulation and PWM-based dimming. The system integrates a microcontroller for real-time control, RS485 communication for long-distance networking, and temperature sensing for safe operation. Each channel is independently controlled, enabling flexible lighting patterns and scalable system expansion. The design focuses on reliability, thermal protection, and efficient power delivery for high-current LED applications.",

    tags: [
      "Power Electronics",
      "PCB Design",
      "Embedded Systems",
      "PWM Control",
      "LED Driver",
      "RS485",
      "Hardware Design",
    ],

    icon: Lightbulb,
    highlight: "LED Power Control",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1683835/_9AJ5MQyfmN.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "Multi-Channel LED Driver Hardware",
      "PWM Control Firmware",
      "RS485 Communication Interface",
      "Thermal Monitoring Integration",
      "Custom PCB Design (KiCad)",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed a multi-channel lighting control system capable of driving high-power LEDs with precise brightness control and safe operating conditions. The system supports scalable deployment and remote control through serial communication.",
      },

      {
        heading: "System Architecture",
        body:
          "The design integrates power regulation, control logic, and communication into a single embedded platform.",
        bullets: [
          "Microcontroller-based PWM control system",
          "Three independent LED driving channels",
          "Constant current regulation for stable output",
          "Integrated communication interface for scalability",
        ],
      },

      {
        heading: "Power & Driver Design",
        body:
          "Each LED channel is driven using constant current circuitry to ensure safe and efficient operation.",
        bullets: [
          "Constant current LED drivers for thermal safety",
          "Supports high-current operation up to ~1A",
          "Resistor-based current configuration",
          "Protection against overcurrent and overheating",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1683840/0104054923732.png",
        ],
      },

      {
        heading: "Control System",
        body:
          "A microcontroller is used to generate PWM signals and manage communication across the system.",
        bullets: [
          "PWM-based brightness control",
          "Multiple channel synchronization",
          "UART-based communication interface",
          "Flexible lighting pattern generation",
        ],
      },

      {
        heading: "Communication Interface",
        body:
          "RS485 communication enables long-distance control and multi-device networking.",
        bullets: [
          "Half-duplex RS485 communication",
          "Supports multi-node bus architecture",
          "Reliable long-range data transmission",
          "Expandable system design",
        ],
      },

      {
        heading: "Thermal & Sensor Integration",
        body:
          "Temperature monitoring is included to ensure safe operation of high-power LEDs.",
        bullets: [
          "Digital temperature sensing",
          "Thermal protection considerations",
          "Improved reliability under high load",
        ],
      },

      {
        heading: "PCB Design & Fabrication",
        body:
          "The PCB was designed in KiCad with focus on power routing and manufacturability.",
        bullets: [
          "Custom PCB layout optimized for power delivery",
          "3D visualization for mechanical validation",
          "Designed for automated fabrication workflows",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1683842/1410048502637.png",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates expertise in power electronics, embedded control, and PCB design. It highlights the ability to design reliable, scalable lighting systems with integrated communication and thermal awareness for real-world applications.",
      },
    ],
  },
  {
    slug: "9c7e4b",
    title: "Wireless High-Power Lighting Control Module",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "pcb-hardware"],

    description:
      "Wireless RGB lighting controller with PWM power stage and mobile app integration for high-power LED strips.",

    longDescription:
      "Developed a wireless lighting control module capable of driving high-power RGB LED strips using PWM-based switching and mobile app control. The system integrates an ESP32-based controller with MOSFET power stages to handle up to 100W load. It supports real-time color control via WiFi using a mobile application interface. The design includes a custom PCB, onboard voltage regulation, and a 3D-printed enclosure, forming a complete product-ready solution for smart lighting applications.",

    tags: [
      "ESP32",
      "IoT",
      "PWM Control",
      "Power Electronics",
      "Embedded Systems",
      "LED Control",
      "PCB Design",
    ],

    icon: Wifi,
    highlight: "Wireless LED Control",

    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1809759/_OXf2590Kja.blob",
      },
    ],

    hidden: false,

    deliverables: [
      "Wireless LED Control System",
      "ESP32 Firmware Integration",
      "MOSFET Power Driver Stage",
      "Custom PCB Design",
      "3D Printed Enclosure",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Designed a wireless lighting control module capable of driving high-power RGB LED strips with real-time control via mobile application. The system combines embedded control, power electronics, and user interface into a compact product-ready design.",
      },

      {
        heading: "System Architecture",
        body:
          "The system integrates wireless communication, PWM control, and high-current switching into a unified platform.",
        bullets: [
          "ESP32-based wireless control system",
          "PWM signal generation for RGB channels",
          "MOSFET-based high-current switching stage",
          "Mobile app-based real-time control",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1809761/unnamed.jpg",
        ],
      },

      {
        heading: "Power & Driver Stage",
        body:
          "The LED strips are driven using logic-level MOSFETs to handle high current loads efficiently.",
        bullets: [
          "Supports up to ~100W LED load",
          "IRLFZ44N MOSFET-based switching",
          "12V LED strip compatibility",
          "Efficient PWM-based brightness control",
        ],
      },

      {
        heading: "Wireless Control System",
        body:
          "The system uses WiFi connectivity to enable remote lighting control through a mobile application.",
        bullets: [
          "ESP32-C3 microcontroller platform",
          "Real-time control via mobile app",
          "Color and brightness adjustment",
          "User-friendly interface integration",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1809765/unnamed.png",
        ],
      },

      {
        heading: "PCB Design",
        body:
          "The PCB was designed using a modern design workflow with emphasis on compact layout and power routing.",
        bullets: [
          "Custom PCB designed using Flux.ai",
          "Optimized routing for power and signal integrity",
          "Manufactured using rapid prototyping services",
        ],
      },

      {
        heading: "Mechanical Design",
        body:
          "A custom enclosure was designed and 3D printed to house the electronics securely.",
        bullets: [
          "Enclosure designed using Fusion 360",
          "STL export for 3D printing",
          "Compact and functional mechanical design",
        ],
      },

      {
        heading: "Testing & Validation",
        body:
          "The system was tested using RGB LED strips and controlled through a mobile application to validate performance.",
        bullets: [
          "Real-time lighting control validation",
          "Stable operation under load",
          "User interaction testing via app",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1809771/unnamed.jpg",
          "https://hackster.imgix.net/uploads/attachments/1809772/unnamed.png",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates end-to-end embedded product development, including wireless communication, power electronics, PCB design, and mechanical integration. It highlights the ability to build complete IoT-enabled hardware systems ready for real-world deployment.",
      },
    ],
  },
  {
    slug: "9d1b73",
    title: "Event-Driven Environmental Monitoring System",
    category: "IoT & Connectivity",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "Event-driven water leak monitoring system built with Particle Photon to detect flooding conditions and push real-time alerts across connected devices.",
    longDescription:
      "Developed a connected water leak detection system using a Particle Photon and conductivity-based leak sensor to identify flooding events in real time. The firmware continuously monitors the sensor state, applies non-blocking timing logic, and publishes cloud events when water is detected. A webhook integration forwards these events to Pushbullet, enabling multi-device notifications on phones and computers. The system also implements an escalating alert schedule, ensuring persistent user awareness until the leak condition is resolved.",
    tags: [
      "Particle Photon",
      "Embedded C++",
      "Pushbullet",
      "Webhooks",
      "IoT Alerts",
      "Sensor Integration",
      "Cloud Events",
    ],
    icon: Droplet,
    highlight: "IoT Alerts",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/cover_image/file/84537/acc34cba-ccd9-42da-9453-6c32af2e05d4.jpg",
      },
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/image/file/81245/ParticleCloudPushbullet.png",
      },
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/image/file/82451/Screenshot_2015-10-14-15-39-28.png",
      },
    ],
    hidden: false,
    deliverables: [
      "Particle Firmware",
      "Webhook Configuration",
      "Cloud Notification Pipeline",
      "Sensor Interface Design",
      "System Validation",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Built a lightweight IoT monitoring system that detects water leaks and immediately notifies the user through cloud-connected devices. The solution combines embedded sensing, event-driven firmware, and webhook-based alert delivery to reduce the response time to flooding incidents in homes, utility rooms, and equipment areas.",
      },
      {
        heading: "System Architecture",
        body: "The design follows a simple event-driven pipeline where the embedded node detects water presence, publishes a cloud event, and triggers a third-party notification service for remote alerts.",
        bullets: [
          "Water leak sensor connected to a Particle Photon digital input",
          "Internal pull-up configuration reduces external hardware complexity",
          "Leak detection event published to Particle Cloud",
          "Webhook forwards alert payload to Pushbullet for multi-device notification",
        ],
        images: [
          "https://hackster.imgix.net/uploads/image/file/81245/ParticleCloudPushbullet.png",
        ],
      },
      {
        heading: "Hardware Interface",
        numbered: [
          {
            title: "Leak Sensor Integration",
            body: "The water leak sensor is wired between ground and a digital input, allowing the Particle Photon to detect conductivity when water bridges the sensing contacts. This keeps the hardware minimal while remaining effective for practical deployment.",
          },
          {
            title: "On-Board Status Indication",
            body: "The built-in LED is used as a local visual alarm, giving instant confirmation that a leak condition has been detected even before a remote notification is received.",
          },
          {
            title: "Expandable Sensing",
            body: "The architecture can be extended to monitor multiple locations by assigning additional sensors to free GPIO pins or wiring multiple sensing points depending on the application.",
          },
        ],
      },
      {
        heading: "Firmware Behavior",
        bullets: [
          "Periodic non-blocking sensor polling using elapsed timing logic",
          "State-based detection to avoid repeated false retriggers",
          "Cloud publish events for dashboard visibility and webhook forwarding",
          "Firmware-driven escalation schedule for persistent leak notifications",
        ],
      },
      {
        heading: "Alert Escalation Logic",
        body: "Instead of issuing only a single alert, the firmware schedules repeated notifications while the fault condition remains active. This improves reliability in real-world use where the first alert may be missed.",
        bullets: [
          "Initial alert after 10 seconds",
          "Repeated alerts after 1 minute and 5 minutes",
          "Extended reminders after 15 minutes and 1 hour",
          "Recurring 4-hour notifications until the leak is cleared",
        ],
      },
      {
        heading: "Outcome",
        body: "The final system delivers a low-cost but effective flood alerting solution that combines embedded firmware with cloud connectivity. It demonstrates practical IoT system design through sensor integration, real-time event publishing, webhook automation, and persistent remote notification handling.",
      },
    ],
  },
  {
    slug: "4f8c2e",
    title: "Multi-Topology Motor Drive Platform",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Multi-mode motor control system using IFX007T drivers supporting DC, H-bridge, and sensorless BLDC operation on Arduino.",
    longDescription:
      "Implemented and evaluated a multi-mode motor control system using the Infineon IFX007T motor driver shield. The platform supports multiple configurations including half-bridge DC control, full H-bridge bidirectional control, and three-phase BLDC operation. The system demonstrates both sensorless BLDC control using Back EMF (BEMF) and hall-sensor-based control for higher precision. Designed for flexibility, the architecture enables controlling multiple motors simultaneously while maintaining efficient power handling and modular driver abstraction.",
    tags: [
      "Motor Control",
      "BLDC",
      "H-Bridge",
      "Power Electronics",
      "Arduino",
      "Embedded Systems",
      "BEMF",
    ],
    icon: Gauge,
    highlight: "Motor Control",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1150159/_WSJLKa8SPT.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "Motor Control Firmware",
      "Multi-Mode Driver Configuration",
      "BLDC Control Implementation",
      "Hardware Integration Setup",
      "Motor Control Testing",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed a flexible motor control system capable of driving DC and brushless motors using a modular half-bridge driver architecture. The system demonstrates how different motor control strategies can be implemented using the same hardware platform.",
      },
      {
        heading: "Driver Architecture",
        body: "The system is based on three IFX007T half-bridge drivers, which can be combined in different configurations to support multiple motor types.",
        bullets: [
          "Each IFX007T acts as an independent half-bridge",
          "Three half-bridges enable multi-motor or BLDC configurations",
          "Drivers can be combined to form full H-bridge structures",
          "Supports both unidirectional and bidirectional control",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1200850/possible_applications_2_UFUIo32qw7.JPG",
        ],
      },
      {
        heading: "DC Motor Control Modes",
        numbered: [
          {
            title: "Half-Bridge Mode",
            body: "Each half-bridge drives a DC motor in a single direction with independent speed control. Suitable for multi-channel unidirectional control systems.",
          },
          {
            title: "H-Bridge Mode",
            body: "Combining two half-bridges forms a full H-bridge, enabling bidirectional motor control with variable speed and direction.",
          },
        ],
      },
      {
        heading: "BLDC Control",
        body: "The system supports three-phase BLDC motor control using the three available half-bridges.",
        bullets: [
          "Sensorless BLDC control using Back EMF (BEMF)",
          "Automatic commutation based on voltage feedback",
          "No hall sensors required in BEMF mode",
          "Supports variable speed ramp-up and control",
        ],
      },
      {
        heading: "Hall Sensor Mode",
        body: "For higher precision applications, the system also supports hall-sensor-based BLDC motors.",
        bullets: [
          "Provides accurate rotor position feedback",
          "Improves stability and control at low speeds",
          "Supports field weakening mode for higher speed operation",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1151255/terminals_kvuCFIpenj.JPG",
        ],
      },
      {
        heading: "Software Integration",
        body: "The system uses an Arduino-based control layer with a dedicated driver library to simplify motor control implementation.",
        bullets: [
          "Library-based abstraction for motor control",
          "Example sketches for each configuration",
          "Utility tools for BLDC pole pair detection",
          "Compatible with multiple microcontroller platforms",
        ],
      },
      {
        heading: "Simulation & Validation",
        body: "An online simulation tool was used to validate torque and behavior across different motor configurations before deployment.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1163238/simulation_I03deKM54g.jpg",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The project demonstrates practical understanding of motor control systems, including power stage design, multi-mode driver configuration, and BLDC control techniques. It highlights experience in combining hardware abstraction with real-world motor control applications.",
      },
    ],
  },
  {
    slug: "1a7e5c",
    title: "Browser-Based Mobile Robotics Platform",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],
    description:
      "Web-controlled robotic car using ESP8266 access point, embedded web server, and serial communication with motor controller.",
    longDescription:
      "Developed a WiFi-controlled robotic car system combining an ATmega328-based motor controller with an ESP8266 acting as a wireless access point and embedded web server. The system hosts a browser-based control interface that allows real-time directional and speed control from any connected device. Communication between the ESP8266 and the motor controller is implemented via serial protocol, enabling separation of networking and control logic. The design integrates motor driver hardware, onboard web UI, and embedded firmware into a cohesive real-time control system.",
    tags: [
      "ESP8266",
      "Arduino",
      "IoT",
      "Web Server",
      "Motor Control",
      "Embedded Systems",
      "WiFi",
    ],
    icon: Wifi,
    highlight: "Web Robotics",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1485410/img_3641_4IliUhwScq.jpg",
      },
    ],
    hidden: false,
    deliverables: [
      "Embedded Web Server (ESP8266)",
      "HTML Control Interface",
      "Motor Control Firmware",
      "Serial Communication Protocol",
      "WiFi-Based Control System",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a WiFi-enabled robotic control system where a browser-based interface communicates with an embedded device acting as both access point and web server. The architecture separates networking logic from motor control, enabling modular system design.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1485391/_QKeZ6HTyI8.blob",
        ],
      },
      {
        heading: "System Architecture",
        body: "The system combines networking, control, and actuation layers into a unified workflow.",
        bullets: [
          "ESP8266 operates as WiFi access point and HTTP server",
          "Client devices connect directly via browser",
          "Commands sent as HTTP requests (GET/POST)",
          "Serial communication between ESP8266 and ATmega328",
          "Motor control handled independently by Arduino firmware",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1485409/blockflowdiagram_bzUtPAh7mM.png",
        ],
      },
      {
        heading: "Hardware System",
        body: "The platform integrates motor driving hardware, embedded controllers, and power management for mobile operation.",
        bullets: [
          "ATmega328 handles real-time motor control",
          "L298 H-bridge driver controls dual DC motors",
          "ESP8266 provides wireless communication",
          "Battery-powered system using Li-ion cells",
          "Optional encoder modules for feedback integration",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1485410/img_3641_4IliUhwScq.jpg",
          "https://hackster.imgix.net/uploads/attachments/1485411/img_3643_8OTJsTlsBu.jpg",
          "https://hackster.imgix.net/uploads/attachments/1485412/schematicdiagram_Gy4WnIxRhh.png",
        ],
      },
      {
        heading: "Embedded Networking",
        body: "The ESP8266 is configured as a standalone access point with integrated DNS and HTTP server capabilities.",
        bullets: [
          "SoftAP mode creates dedicated wireless network",
          "mDNS enables local URL access (esp8266.local)",
          "HTTP server processes control commands",
          "SPIFFS used to store and serve HTML interface",
        ],
      },
      {
        heading: "Web Interface",
        body: "A browser-based UI enables real-time control without requiring a dedicated mobile application.",
        bullets: [
          "Directional buttons (FWD, LEFT, RIGHT, BACK)",
          "Real-time speed control via slider",
          "GET requests used for motion commands",
          "POST requests used for speed control",
          "Visual feedback via button state changes",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1485425/htmlpage_qyEt6qTHNG.png",
        ],
      },
      {
        heading: "Control Protocol",
        body: "A lightweight serial protocol is used to decouple networking and control logic.",
        bullets: [
          "Single-character commands for motion control",
          "Speed transmitted as formatted string values",
          "ATmega328 interprets commands and drives motors",
          "PWM used for speed control via L298 driver",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The project demonstrates a complete embedded system integrating networking, control, and actuation. It highlights experience in embedded web servers, real-time control systems, communication protocols, and hardware/software co-design for interactive IoT applications.",
      },
    ],
  },
  {
    slug: "b2e9f6",
    title: "Event-Driven Embedded Vision & Streaming System",
    category: "IoT & Connected Devices",
    filterSlugs: ["iot-connected-devices", "embedded-firmware"],

    description:
      "Real-time embedded vision system with object-triggered image capture and Ethernet-based streaming interface.",

    longDescription:
      "Designed an embedded vision system capable of detecting objects in real time and capturing images automatically upon detection. The system integrates ultrasonic sensing, camera acquisition, and Ethernet-based communication to deliver captured images through a web interface. It features low-latency event detection, efficient memory management, and a lightweight HTTP server running directly on a microcontroller. The architecture is optimized for constrained environments while maintaining reliable real-time performance.",

    tags: [
      "Embedded Systems",
      "Computer Vision",
      "IoT",
      "Ethernet",
      "Real-Time Systems",
      "Networking",
      "Microcontrollers",
    ],

    icon: Camera,
    highlight: "Embedded Vision System",

    media: [
      {
        type: "image",
        src: "/images/camera_robot.jpg",
      },
    ],

    hidden: false,

    deliverables: [
      "Object Detection Trigger System",
      "Embedded Camera Integration",
      "Ethernet-Based Web Server",
      "Real-Time Image Streaming",
      "Memory-Optimized Firmware",
    ],

    sections: [
      {
        heading: "Project Overview",
        body:
          "Developed an embedded vision system that detects nearby objects and captures images automatically. The system serves captured images through a real-time web interface, enabling remote monitoring without external servers.",
      },

      {
        heading: "System Architecture",
        body:
          "The system integrates sensing, image capture, and network communication into a single embedded platform.",
        bullets: [
          "Ultrasonic-based object detection",
          "Camera module for image acquisition",
          "Embedded HTTP server for web interface",
          "Ethernet-based communication for reliability",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1927139/circuit_diagram_58vnMDGQPz.png",
          "https://hackster.imgix.net/uploads/attachments/1927138/components_needed_iosE06MSPQ.png",
        ],
      },

      {
        heading: "Object Detection & Trigger Logic",
        body:
          "The system continuously measures distance and triggers image capture when objects enter a predefined range.",
        bullets: [
          "Ultrasonic distance measurement (2–400 cm)",
          "Detection threshold (~20 cm)",
          "Cooldown mechanism to prevent repeated captures",
          "Event-driven processing loop",
        ],
      },

      {
        heading: "Image Capture Pipeline",
        body:
          "Captured images are processed and stored efficiently within limited memory constraints.",
        bullets: [
          "JPEG image capture using camera module",
          "Validation using JPEG header markers",
          "Buffered storage (~40KB frame buffer)",
          "Dynamic memory management and cleanup",
        ],
      },

      {
        heading: "Embedded Web Server",
        body:
          "A lightweight HTTP server runs directly on the microcontroller to serve data and images.",
        bullets: [
          "Custom HTTP response handling",
          "Dynamic HTML page generation",
          "Auto-refresh web interface",
          "Image endpoint for real-time streaming",
        ],
      },

      {
        heading: "Networking & Data Handling",
        body:
          "The system implements efficient network communication and data transmission techniques.",
        bullets: [
          "Ethernet-based communication using WIZnet stack",
          "DHCP-based IP assignment",
          "Chunked image transmission (2048-byte segments)",
          "Connection handling and resource cleanup",
        ],
      },

      {
        heading: "Firmware Design",
        body:
          "The firmware is designed for real-time responsiveness and resource efficiency.",
        bullets: [
          "Event-driven main loop architecture",
          "Non-blocking network handling",
          "Periodic DHCP maintenance",
          "Garbage collection for memory optimization",
        ],
      },

      {
        heading: "Engineering Outcome",
        body:
          "This project demonstrates advanced embedded system design, combining real-time sensing, image processing, and low-level networking. It highlights the ability to build efficient, standalone vision systems capable of delivering responsive monitoring functionality in constrained environments.",
      },
    ],
  },
  {
    slug: "a7f3c9",
    title: "On-Device Cardiac Anomaly Detection System",
    category: "AI & Edge Computing",
    filterSlugs: ["ai-edge-computing", "embedded-firmware"],
    description:
      "Edge ML system for detecting atrial fibrillation from PPG signals using ESP32 with real-time inference.",
    longDescription:
      "Developed an edge AI-based biomedical system for detecting atrial fibrillation (AFib) using photoplethysmography (PPG) signals on an ESP32 platform. The system processes real-time sensor data using a machine learning model trained via Edge Impulse, eliminating the need for cloud computation. The pipeline includes signal acquisition, preprocessing, feature extraction (HR/HRV), and classification using a lightweight model optimized for embedded deployment. Designed as a portable, battery-powered device, the system demonstrates real-time health monitoring with high accuracy while maintaining low power consumption and minimal latency.",
    tags: [
      "Edge AI",
      "ESP32",
      "PPG",
      "Signal Processing",
      "Machine Learning",
      "Embedded Systems",
      "Healthcare IoT",
    ],
    icon: Activity,
    highlight: "Edge AI Health Monitoring",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1879156/_h8itjqr0Kc.blob",
      },
    ],
    hidden: false,
    deliverables: [
      "Edge ML Model (PPG Classification)",
      "ESP32 Firmware Integration",
      "Signal Processing Pipeline (HR/HRV)",
      "Real-Time Inference System",
      "Embedded UI & Feedback System",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a portable edge AI system to detect atrial fibrillation from PPG signals in real time. The system operates entirely on-device, enabling low-latency inference and eliminating dependency on cloud infrastructure.",
      },
      {
        heading: "Sensing & Signal Acquisition",
        body: "The system uses optical sensing to capture blood volume changes for cardiac signal analysis.",
        bullets: [
          "MAX30102 PPG sensor for optical heart signal acquisition",
          "Sampling rate optimized to 50 Hz for embedded efficiency",
          "30-second acquisition window for stable classification",
          "Signal normalization and noise handling on-device",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1881910/ppg_fBPKCV13qa.png",
        ],
      },
      {
        heading: "Hardware Platform",
        body: "The system is built on a compact ESP32-based wearable platform.",
        bullets: [
          "ESP32 (M5StickC Plus) for processing and UI",
          "Integrated display, buzzer, and buttons",
          "Low-power portable design",
          "I2C interface for sensor communication",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1879159/m5stickc_fuYvlbjdT5.png",
          "https://hackster.imgix.net/uploads/attachments/1879160/heart_rate_hat_s7MZRoj74o.png",
        ],
      },
      {
        heading: "Data Pipeline",
        body: "A complete data pipeline was implemented from raw dataset ingestion to model-ready input.",
        bullets: [
          "MIMIC dataset used for AFib and normal rhythm samples",
          "CSV signal extraction and preprocessing",
          "Interpolation of missing values",
          "Conversion to Edge Impulse JSON acquisition format",
          "Automated dataset upload via CLI",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1879161/data_acquisition_OG0KLUVkf7.png",
        ],
      },
      {
        heading: "Feature Engineering",
        body: "Feature extraction focuses on physiological indicators derived from PPG signals.",
        bullets: [
          "Heart Rate (HR) extraction",
          "Heart Rate Variability (HRV) analysis",
          "30-second sliding window segmentation",
          "Downsampling from 125 Hz to 50 Hz",
        ],
      },
      {
        heading: "Model Development",
        body: "A lightweight ML model was trained and optimized for embedded deployment.",
        bullets: [
          "XGBoost-based classifier",
          "93.2% training accuracy (float32 model)",
          "95.15% accuracy on test dataset",
          "Optimized for embedded inference using Edge Impulse",
        ],
      },
      {
        heading: "Edge Deployment",
        body: "The trained model was deployed directly on the ESP32 for real-time inference.",
        bullets: [
          "EON compiler optimization for embedded execution",
          "Arduino-compatible ML library integration",
          "On-device inference without cloud dependency",
          "Low-latency classification pipeline",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1879178/deployment_GCJXHncqq4.png",
        ],
      },
      {
        heading: "User Interface & Interaction",
        body: "The device provides real-time feedback and intuitive interaction.",
        bullets: [
          "On-device waveform visualization",
          "Progress bar for sampling duration",
          "Audible feedback via buzzer",
          "Simple button-based control",
        ],
        images: [
          "https://hackster.imgix.net/uploads/attachments/1882205/user_interface_gmFljHQj9Z.jpg",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "This project demonstrates end-to-end expertise in embedded AI systems, including biomedical signal processing, dataset engineering, model optimization, and real-time deployment. It highlights the ability to design efficient edge AI solutions for healthcare applications under resource constraints.",
      },
    ],
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
        <div className={`grid gap-3 grid-cols-1 ${section.images.length >= 3 ? "sm:grid-cols-3" : section.images.length === 2 ? "sm:grid-cols-2" : ""}`}>
          {section.images.map((src, j) => (
            <div key={j} className="rounded-lg overflow-hidden border border-border/40">
              <img src={src} alt="" className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
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
              <span className="inline-flex items-center text-[11px] font-mono bg-primary/20 text-primary border border-primary/40 rounded-full px-3 py-0.5 font-semibold shrink-0 mt-1">
                {project.highlight}
              </span>
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

export function Portfolio({
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
          .getElementById("portfolio")
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
          .getElementById("portfolio")
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
    <section id="portfolio" className="py-24 relative">
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
