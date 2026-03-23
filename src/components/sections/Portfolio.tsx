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
  Zap
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
    slug: "usb-c-pd-sink-cypd3177",
    title: "USB-C PD Sink with CYPD3177",
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
    highlight: "USB-C barrel-connector replacement up to 100W",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1208398/_BLGl2VleYg.blob?auto=compress%2Cformat&w=900&h=675&fit=min",
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
          "https://hackster.imgix.net/uploads/attachments/1208399/cables_VoeFMS9dBO.jpg?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1208401/heatschrink5_Z2jsInvZvb.jpg?auto=compress%2Cformat&w=1280&h=960&fit=max",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "The final design delivers a compact, high-power USB-C PD sink solution that modernizes power input design. It demonstrates strong capability in USB-C PD integration, high-current PCB design, and product-oriented hardware development.",
      },
    ],
  },
  {
    slug: "f3a91c",
    title: "FPGA Deep Learning Inference (HLS, Kria KV260)",
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
    highlight: "FPGA AI Acceleration",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1470478/_41pDWgCaDU.blob?auto=compress%2Cformat&w=900&h=675&fit=min",
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
          "https://hackster.imgix.net/uploads/attachments/1468476/network-1_nX3kYRKuCr.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1468478/nn-1_EjOow0B27g.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1469957/screenshot_from_2022-07-18_07-32-04_6u0ZV6PQRD.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
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
        images: [
          "https://hackster.imgix.net/uploads/attachments/1471567/screenshot_from_2022-07-21_11-36-36_D2qfKnduW0.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1468488/screenshot_from_2022-07-14_11-05-32_1onc2MCb2d.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1469952/screenshot_from_2022-07-18_07-15-43_fJZLjTJdHC.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1469953/screenshot_from_2022-07-18_07-16-05_po6Ry0wjpW.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470017/screenshot_from_2022-07-18_09-23-29_jELrqstq9M.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
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
        images: [
          "https://hackster.imgix.net/uploads/attachments/1470046/screenshot_from_2022-07-18_11-02-04_W4g8whfAjl.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470055/screenshot_from_2022-07-18_11-34-16_9woHIRfMwM.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470020/screenshot_from_2022-07-18_09-36-42_YgHbkMefvL.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470016/screenshot_from_2022-07-18_09-21-25_r6vQZozEjB.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470705/screenshot_from_2022-07-19_15-31-44_maInc37ZYE.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
        ],
      },
      {
        heading: "FPGA Integration",
        body: "The generated HLS IP is integrated into the FPGA system using Vivado and deployed via PYNQ for runtime interaction.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1470117/screenshot_from_2022-07-18_14-57-15_Gh4yr3CCFQ.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470725/screenshot_from_2022-07-19_17-03-50_gbWYavQZ3L.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470119/screenshot_from_2022-07-18_14-58-11_PpmwBfmdIh.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
        ],
      },
      {
        heading: "Runtime & Testing",
        body: "Inference execution and validation are performed using PYNQ with Python-based control.",
        images: [
          "https://hackster.imgix.net/uploads/attachments/1471598/screenshot_from_2022-07-21_13-25-38_sJKC2hGBFq.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470913/screenshot_from_2022-07-20_10-00-38_SgJkm0eE0w.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470914/screenshot_from_2022-07-20_10-00-49_F8q7KCrvPR.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470919/screenshot_from_2022-07-20_10-01-01_3OX57YJRjM.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1471066/screenshot_from_2022-07-20_10-01-32_VlnJUzH0Ls.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470965/screenshot_from_2022-07-20_10-38-40_MuyGdaD1ew.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470922/screenshot_from_2022-07-20_10-02-36_aMZN9vhEMg.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470923/screenshot_from_2022-07-20_10-03-09_iWcLjExWw5.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1470924/screenshot_from_2022-07-20_10-03-27_ZnmZf3V6SB.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1471601/screenshot_from_2022-07-21_13-27-01_Fl8OQT4aHa.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
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
          "https://hackster.imgix.net/uploads/attachments/1474151/screenshot_from_2022-07-27_08-08-53_fnXhHMarlo.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
          "https://hackster.imgix.net/uploads/attachments/1474150/screenshot_from_2022-07-27_08-08-33_4eyr88uqtR.png?auto=compress%2Cformat&w=1280&h=960&fit=max",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "Achieved extremely high inference throughput exceeding 200,000 FPS by combining quantization, parallelism, and pipelined architecture. The project demonstrates strong capability in FPGA-based AI acceleration, HLS design optimization, and hardware/software co-design.",
      },
    ],
  },
  {
    slug: "espiff-esp32-rp2040-controller",
    title: "EsPiFF: ESP32 + RP2040 Controller",
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
    highlight: "Reliable Raspberry Pi alternative for 24/7 systems",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/attachments/1520175/espiff-v3-angle-02_jpg_md-xl_vEo2gKvi8U.jpg?auto=compress,format&w=1280&h=960&fit=max",
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
          "https://hackster.imgix.net/uploads/attachments/1520167/_7fhyhPxdZv.blob?auto=compress,format&w=900&h=675&fit=min",
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
    slug: "a9f3c7",
    title: "Edge AI Model Porting (Jetson → TDA4VM)",
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
        src: "https://hackster.imgix.net/uploads/attachments/1541958/_unlI3boDdj.blob?auto=compress,format&w=900&h=675&fit=min",
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
          "https://hackster.imgix.net/uploads/attachments/1541944/dsc_7551_WZqr6P6Slb.JPG?auto=compress,format&w=1280&h=960&fit=max",
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
          "https://hackster.imgix.net/uploads/attachments/1541946/dsc_8678006_kEPDnhO7T0.jpg?auto=compress,format&w=1280&h=960&fit=max",
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
          "https://hackster.imgix.net/uploads/attachments/1547665/image_jtAmQ78BXZ.png?auto=compress,format&w=1280&h=960&fit=max",
        ],
      },
      {
        heading: "Engineering Outcome",
        body: "Demonstrates effective cross-platform AI deployment and the importance of aligning model execution with hardware accelerators for real-world edge performance.",
      },
    ],
  },
  {
    slug: "water-leak-iot",
    title: "Water Leak Detection & Alert System",
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
    highlight: "Real-time water leak alerts",
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
        images: [
          "https://hackster.imgix.net/uploads/image/file/82451/Screenshot_2015-10-14-15-39-28.png",
        ],
      },
      {
        heading: "Outcome",
        body: "The final system delivers a low-cost but effective flood alerting solution that combines embedded firmware with cloud connectivity. It demonstrates practical IoT system design through sensor integration, real-time event publishing, webhook automation, and persistent remote notification handling.",
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

      {/* Modal wrapper — prev/next sit just outside the card */}
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

          {/* Hero media — first item only, no slide */}
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

            {/* Rich sections — each project has its own unique structure */}
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
      ? "Suggested"
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
                  Suggested ({recommended.size})
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

                  {/* Category — top left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-foreground/70 bg-background/70 backdrop-blur-sm border border-border/50 rounded-full px-2.5 py-1">
                      <Icon className="w-3 h-3 text-primary" />
                      {project.category}
                    </span>
                  </div>

                  {/* Highlight — bottom of image, triggers recommend on click */}
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
                  ? "No suggested projects yet. Click the thumbs-up icon on any project card to add it."
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
