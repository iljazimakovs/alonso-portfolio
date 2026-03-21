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
  Droplet
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
    slug: "smdc",
    title: "Smart 12V DC Motor Controller",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "12V DC motor control PCB with integrated rotation counting using STM8S003. HALL sensor for real-time speed measurement and MOSFET-based driver for efficient motor operation.",
    longDescription:
      "Designed a reliable 12V DC motor control PCB with integrated rotation counting using an STM8S003 microcontroller. The system utilizes a HALL sensor for precise real-time speed and rotation measurement, while a MOSFET-based driver ensures efficient and smooth motor operation. The PCB layout was optimized for noise immunity, thermal management, and long-term durability. The solution supports customizable control logic, making it suitable for automation, robotics, and industrial motor control applications.",
    tags: [
      "STM8S003",
      "Embedded C",
      "HALL Sensor",
      "MOSFET Driver",
      "PWM",
      "Power Electronics",
      "PCB Design",
    ],
    icon: Battery,
    highlight: "HALL sensor feedback",
    media: [{ type: "video", src: motorVideo }],
    hidden: false,
    deliverables: [
      "PCB Layout + Schematic",
      "STM8 Firmware",
      "BOM & Gerber Files",
      "Motor Control Documentation",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a reliable 12V DC motor control PCB with integrated rotation counting using an STM8S003 microcontroller. The system utilizes a HALL sensor for precise real-time speed and rotation measurement, while a MOSFET-based driver ensures efficient and smooth motor operation.",
      },
      {
        heading: "Hardware Architecture",
        bullets: [
          { text: "MCU — STM8S003", sub: ["16MHz internal clock, handles PWM generation and HALL signal decoding", "GPIO-driven MOSFET gate control with configurable dead-time"] },
          { text: "Motor Driver Stage", sub: ["N-channel MOSFET H-bridge for bidirectional speed and direction control", "Gate resistors and bootstrap diodes for fast, safe switching"] },
          { text: "Rotation Sensing", sub: ["HALL effect sensor with 3-pin interface mounted adjacent to motor shaft", "Debounced edge-counting logic for accurate RPM calculation"] },
          { text: "PCB Layout", sub: ["Power and signal planes separated to minimise switching noise", "Thermal relief pads on MOSFET pads for heat dissipation"] },
        ],
      },
      {
        heading: "Firmware Features",
        bullets: [
          "Closed-loop PWM speed control with configurable duty cycle (0–100%)",
          "Interrupt-driven HALL pulse counting for real-time RPM feedback",
          "Overcurrent shutdown triggered via shunt resistor sensing",
          "UART command interface for setpoint and mode configuration",
          "Soft start / ramp logic to prevent inrush current spikes",
        ],
      },
    ],
  },
  {
    slug: "rpi2-security-camera",
    title: "Raspberry Pi Security Camera System",
    category: "IoT & Connectivity",
    filterSlugs: ["iot-connected-devices"],
    description:
      "Motion-triggered security camera built on Raspberry Pi 2 with PIR sensing, video capture, Azure Blob upload, and remote smartphone notifications.",
    longDescription:
      "Developed a connected security monitoring system using Raspberry Pi 2, a USB webcam, and a PIR motion sensor to detect intrusions and record events automatically. The system captures video when motion is detected, stops recording once activity ends, and uploads the resulting footage to Microsoft Azure Blob Storage for remote access and retention. A notification pipeline then alerts the user on a smartphone when a new recording has been uploaded, creating a compact cloud-connected surveillance solution that combines edge sensing, media capture, and remote event reporting.",
    tags: [
      "Raspberry Pi 2",
      "PIR Sensor",
      "Webcam",
      "Windows 10 IoT Core",
      "Microsoft Azure",
      "C#",
      "Motion Detection",
    ],
    icon: Camera,
    highlight: "Motion-triggered cloud surveillance",
    media: [
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/cover_image/file/64182/IMG_1790.JPG?auto=compress%2Cformat&w=900&h=675&fit=min",
      },
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/image/file/77176/2015-09-19%2009.18.04.jpg?auto=compress%2Cformat&w=1280&h=960&fit=max",
      },
      {
        type: "image",
        src: "https://hackster.imgix.net/uploads/image_file/file/78279/PIR_RPi2.png",
      },
    ],
    hidden: false,
    deliverables: [
      "Raspberry Pi Camera Application",
      "PIR Motion Detection Integration",
      "Azure Blob Upload Workflow",
      "Remote Notification Pipeline",
      "Wiring & System Validation",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Built a compact security camera system that records video when motion is detected and automatically pushes the captured footage to the cloud. The project combines local sensing, event-based recording, cloud storage, and smartphone notification to create a simple remote monitoring solution for small spaces.",
      },
      {
        heading: "System Workflow",
        body: "The architecture is centered around event-driven capture: motion detection starts recording, inactivity stops recording, and the completed file is uploaded for remote access.",
        bullets: [
          "PIR sensor monitors the environment for movement",
          "Raspberry Pi 2 triggers webcam recording on motion detection",
          "Recording stops when motion is no longer present",
          "Video file is uploaded to Azure Blob Storage",
          "User receives a remote notification after successful upload",
        ],
        images: [
          "https://hackster.imgix.net/uploads/image/file/77176/2015-09-19%2009.18.04.jpg?auto=compress%2Cformat&w=1280&h=960&fit=max",
        ],
      },
      {
        heading: "Hardware Integration",
        numbered: [
          {
            title: "Raspberry Pi Processing Node",
            body: "The Raspberry Pi 2 serves as the local control node, coordinating sensor input, webcam access, recording control, and cloud upload operations within a single embedded platform.",
          },
          {
            title: "PIR Motion Sensor Interface",
            body: "A PIR sensor provides the motion trigger signal, allowing the system to capture only relevant activity instead of recording continuously. This reduces storage usage and makes event review more practical.",
          },
          {
            title: "USB Webcam Capture",
            body: "A standard webcam is used for video acquisition, giving the platform flexible image capture without requiring specialized imaging hardware.",
          },
        ],
        images: [
          "https://hackster.imgix.net/uploads/image_file/file/78279/PIR_RPi2.png",
        ],
      },
      {
        heading: "Software & Cloud Layer",
        bullets: [
          "Application implemented in C# on Windows 10 IoT Core",
          "Video capture controlled directly from the Raspberry Pi runtime",
          "Azure Blob Storage used for remote media retention",
          "Notification flow alerts the user after upload completion",
        ],
      },
      {
        heading: "Engineering Value",
        body: "This project demonstrates practical edge-to-cloud system design by combining physical sensing with automated media handling and cloud services. Rather than functioning as only a local recorder, the system extends into a connected surveillance workflow that improves accessibility and real-time awareness.",
      },
      {
        heading: "Outcome",
        body: "The final implementation delivers a lightweight smart surveillance platform capable of capturing intrusion events, archiving footage remotely, and notifying the user without manual intervention. It highlights the integration of embedded hardware, application logic, and cloud infrastructure in a single IoT security use case.",
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
  {
    slug: "mpsu",
    title: "Miniature Regulated Power Supply",
    category: "PCB & Hardware",
    filterSlugs: ["pcb-hardware", "embedded-firmware"],
    description:
      "Compact regulated power supply PCB with adjustable output voltage and real-time monitoring. ADC/DAC feedback loop controlled by STM8 microcontroller with seven-segment display output.",
    longDescription:
      "Designed a compact regulated power supply PCB with adjustable output voltage and real-time monitoring. Integrated an ADC to measure input, output, and reference voltages for precise feedback control. Output regulation is achieved through a DAC-driven feedback loop, dynamically maintaining stability under varying loads. Controlled by an STM8 microcontroller, the system executes efficient voltage regulation algorithms. A three-digit seven-segment display provides clear operational feedback, demonstrating robust hardware architecture and precision PCB layout design.",
    tags: [
      "STM8",
      "ADC",
      "DAC",
      "Embedded C",
      "Power Electronics",
      "Signal Integrity",
      "PCB Design",
    ],
    icon: Battery,
    highlight: "DAC feedback control",
    media: [
      { type: "video", src: psuVideo, poster: psuImg1 },
      { type: "image", src: psuImg1 },
      { type: "image", src: psuImg2 },
      { type: "image", src: psuImg3 },
    ],
    hidden: false,
    deliverables: [
      "PCB Layout + Schematic",
      "STM8 Firmware",
      "BOM & Gerber Files",
      "Test & Validation Report",
    ],
    sections: [
      {
        heading: "The Regulated Power Supply System",
        body: "A compact bench power supply built on a custom PCB with adjustable output voltage and real-time display. The core of the design is a closed-loop feedback system where the STM8 microcontroller continuously reads the output via ADC, computes the required correction, and drives the output regulator via DAC — all while displaying the live voltage on a three-digit seven-segment display.",
      },
      {
        heading: "Hardware Design",
        numbered: [
          {
            title: "Voltage Sensing Stage",
            body: "A precision voltage divider network feeds the output back to the STM8's built-in 10-bit ADC. Separate inputs monitor the raw input rail, the reference, and the regulated output — giving the firmware a complete picture of system state at every control cycle.",
            image: psuImg1,
          },
          {
            title: "DAC-Driven Feedback Loop",
            body: "A dedicated DAC output drives the reference pin of the linear regulator. By updating this voltage every 10 ms the firmware continuously corrects for load transients and input variation, achieving output stability within ±20 mV across the full load range.",
            image: psuImg2,
          },
          {
            title: "Display & User Interface",
            body: "A three-digit, common-cathode seven-segment display is multiplexed directly from STM8 GPIO. Digit scanning runs from a timer interrupt at 1 kHz, making it imperceptible to the human eye. A front-panel potentiometer sets the voltage target and is also read by ADC.",
            image: psuImg3,
          },
        ],
      },
      {
        heading: "Firmware Implementation",
        bullets: [
          "Closed-loop PID voltage control loop executing at 100 Hz",
          "ADC oversampling (16×) to boost effective resolution to 12 bits",
          "EEPROM-backed setpoint memory — last target survives power cycles",
          "Short-circuit detection with automatic output shutdown and blinking display alert",
          "Configurable output range via compile-time constants (0.8 V – 15 V typical)",
        ],
      },
    ],
  },
  {
    slug: "c45g",
    title: "CM4 5G & WiFi 6 Embedded Board",
    category: "Embedded Linux / Hardware",
    filterSlugs: [
      "pcb-hardware",
      "embedded-linux-bsp",
      "iot-connected-devices",
      "hardware-debugging",
    ],
    description:
      "Highly integrated CM4-based board with 5G RM520N module, Wi-Fi 6 AX200, Micro SD, USB hub, and PoE support - designed for IoT, smart infrastructure, and edge computing with high-bandwidth connectivity.",
    longDescription:
      "Developed a highly integrated custom circuit board based on Raspberry Pi CM4 for advanced embedded and edge applications. The design integrates a 5G RM520N module and Wi-Fi 6 AX200 card for high-speed connectivity, Micro SD storage expansion, and multiple USB interfaces controlled by a USB4056 hub. Optimized PCB layout ensures signal integrity and efficient power management. The board supports IoT, smart infrastructure, and edge computing deployments requiring reliable, high-bandwidth communication.",
    tags: [
      "Raspberry Pi CM4",
      "RM520N 5G",
      "Intel AX200 Wi-Fi 6",
      "USB4056 Hub",
      "High-Speed PCB",
      "Altium",
      "USB",
      "Micro SD",
    ],
    icon: Server,
    highlight: "5G + Wi-Fi 6",
    media: [
      { type: "image", src: cm4_5gImg1 },
      { type: "image", src: cm4_5gImg2 },
      { type: "image", src: cm4_5gImg3 },
      { type: "image", src: cm4_5gImg4 },
      { type: "image", src: cm4_5gImg5 },
    ],
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Signal Integrity Report",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Developed a highly integrated custom carrier board for Raspberry Pi CM4, targeting IoT gateways, edge compute nodes, and smart infrastructure deployments that demand 5G NR cellular and Wi-Fi 6 simultaneously. The board was designed in Altium Designer with careful attention to RF trace routing, power sequencing, and PCIe signal integrity.",
      },
      {
        images: [cm4_5gImg1, cm4_5gImg2],
      },
      {
        heading: "System Architecture",
        bullets: [
          { text: "Compute Core", sub: ["Raspberry Pi CM4 SoM via 100-pin high-density connectors", "Up to 8 GB LPDDR4 RAM and 32 GB eMMC on module"] },
          { text: "5G Cellular — Quectel RM520N", sub: ["5G NR Sub-6 GHz with LTE-A fallback, connected via PCIe Gen 2 M.2 Key B", "Dual nano-SIM slots with hardware MUX for carrier switching"] },
          { text: "Wi-Fi 6 — Intel AX200", sub: ["802.11ax 2×2 MU-MIMO with BT 5.2, connected via M.2 Key E PCIe", "Dual U.FL antenna connectors with matched 50 Ω microstrip traces"] },
          { text: "USB Infrastructure — USB4056 Hub", sub: ["4-port USB 2.0 hub provides host ports plus OTG-capable Type-C interface", "Independently powered USB ports with current-limit protection per port"] },
        ],
      },
      {
        heading: "PCB Design Highlights",
        body: "The board uses a 6-layer stackup with dedicated power, ground, and high-speed signal layers. USB differential pairs are length-matched to within 2 mil and routed away from clock sources. RF traces to the 5G and Wi-Fi modules are 50 Ω controlled impedance with no vias in the RF section.",
        images: [cm4_5gImg3, cm4_5gImg4, cm4_5gImg5],
      },
    ],
  },
  {
    slug: "jtx2",
    title: "Jetson TX2 NX Expansion Board",
    category: "AI & Edge Computing",
    filterSlugs: [
      "pcb-hardware",
      "embedded-linux-bsp",
      "embedded-firmware",
      "hardware-debugging",
    ],
    description:
      "High-performance expansion board for NVIDIA Jetson TX2 NX with dual MIPI-CSI cameras, LVDS input, HDMI, Gigabit Ethernet, USB 3.0, CAN bus, and 60V/6S Li-ion power support for robotics and AI edge applications.",
    longDescription:
      "Designed a high-performance expansion board for the NVIDIA Jetson TX2 NX, extending its capabilities for robotics and AI edge applications. The board integrates dual MIPI-CSI camera connectors, LVDS camera input (Sony FCB 9500-L), HDMI, RJ45 Ethernet, USB 3.0 Type-C, USB 2.0, and Micro SD storage. It supports up to 60V power input with a 6S Li-ion battery interface and RTC backup. Additional interfaces include GPIO, UART, I2C, and CAN, with optimized layout for signal integrity and robust power management.",
    tags: [
      "Jetson TX2 NX",
      "MIPI-CSI",
      "LVDS",
      "HDMI",
      "Gigabit Ethernet",
      "USB 3.0",
      "CAN Bus",
      "Li-ion 6S BMS",
      "Altium",
    ],
    icon: Cpu,
    highlight: "60V AI edge platform",
    media: [
      { type: "image", src: jetsonImg1 },
      { type: "image", src: jetsonImg2 },
      { type: "image", src: jetsonImg3 },
      { type: "image", src: jetsonImg4 },
      { type: "image", src: jetsonImg5 },
    ],
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Power Management Docs",
    ],
    sections: [
      {
        heading: "Project Overview",
        body: "Designed a full-featured expansion board for the NVIDIA Jetson TX2 NX module, extending it into a complete robotics and AI edge platform. The board provides every interface a field-deployed system could need — from dual MIPI-CSI cameras and LVDS input, to CAN bus, USB 3.0, and a wide 60 V input power stage that accepts 6S LiPo directly.",
        images: [jetsonImg1],
      },
      {
        heading: "Interface Overview",
        numbered: [
          {
            title: "Camera Inputs",
            body: "Two 4-lane MIPI-CSI-2 connectors for direct sensor attachment, plus a dedicated LVDS input for Sony FCB-9500L series block cameras. Coax-based signal routing keeps camera noise isolated from the digital section.",
            image: jetsonImg2,
          },
          {
            title: "High-Speed Connectivity",
            body: "HDMI 2.0 output, RJ-45 Gigabit Ethernet, USB 3.1 Gen 1 Type-C for high-throughput device attachment, and USB 2.0 Type-A for peripherals. All high-speed pairs are impedance-controlled and length-matched.",
            image: jetsonImg3,
          },
          {
            title: "Power & Battery Management",
            body: "Wide 12–60 V input accepted through a switching pre-regulator feeding the module's 5 V rail. 6S Li-ion battery JST connector with charge-management IC, gas gauge, and RTC coin-cell backup for uninterrupted operation.",
            image: jetsonImg4,
          },
          {
            title: "Industrial & Expansion Interfaces",
            body: "Isolated CAN 2.0B transceiver for robot drive systems, RS-232/485 UART, I²C and SPI headers, and configurable GPIO. Micro SD for on-board logging. All expansion headers use locking connectors for vibration tolerance.",
            image: jetsonImg5,
          },
        ],
      },
    ],
  },
  {
    slug: "ndai",
    title: "Edge Vision Camera with Cloud Object Detection",
    category: "IoT & Connectivity / Embedded Firmware",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Embedded smart camera built with Netduino and ArduCam OV2640 that captures images and sends them to a cloud server for AI-based object detection and automated alert notifications.",
    longDescription:
      "Developed a smart camera system integrating a Netduino microcontroller with an ArduCam OV2640 module to capture images and transmit them to a middleware server for AI-based object detection. Firmware ports Arduino camera libraries to the .NET Micro Framework using SPI and I2C communication. Captured frames are uploaded to a cloud processing service running YOLO detection models. The system enables event-based monitoring and can trigger notifications such as email or SMS alerts when specific objects are detected.",
    tags: [
      "Netduino",
      "ArduCam OV2640",
      "C#",
      ".NET Micro Framework",
      "SPI",
      "I2C",
      "Python Flask",
      "YOLO",
      "AWS EC2",
    ],
    icon: Camera,
    highlight: "AI Vision Alerts",
    media: [
      { type: "image", src: netduino_cam_1 },
      { type: "image", src: netduino_cam_2 },
      { type: "image", src: netduino_cam_3 },
      { type: "image", src: netduino_cam_4 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Firmware",
      "Camera Interface Integration",
      "Middleware Upload API",
      "AI Detection Pipeline",
      "System Documentation",
    ],
    sections: [
      {
        body: "Built an end-to-end smart surveillance system by combining a Netduino microcontroller with an ArduCam OV2640 camera module. When a detection event fires, the Netduino captures a JPEG frame over SPI, forwards it to a Flask middleware server, and the server runs YOLO object detection — all triggering an email or SMS alert if a person or object of interest is found.",
        images: [netduino_cam_1, netduino_cam_2],
      },
      {
        heading: "System Architecture",
        bullets: [
          { text: "Edge Node — Netduino + OV2640", sub: ["Arduino camera libraries ported to .NET Micro Framework via SPI/I2C", "JPEG compression on-chip reduces payload to ~25 kB per frame", "Triggered by GPIO event (PIR, button, or scheduled timer)"] },
          { text: "Middleware Server — Python Flask on AWS EC2", sub: ["Receives frames over HTTP POST from the Netduino", "Passes frames through a YOLO v5 inference pipeline", "Stores annotated images to S3 and pushes alerts via SMTP / Twilio SMS"] },
        ],
      },
      {
        images: [netduino_cam_3, netduino_cam_4],
      },
    ],
  },
  {
    slug: "ne10",
    title: "NE101 MQTT LTE IoT Camera",
    category: "IoT & Connectivity / Embedded Firmware",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Battery-powered IoT camera using OV5640 and Cat.1 LTE module to capture images and transmit them via MQTT/MQTTS with JSON payloads for remote monitoring, automation systems, and cloud-based image analytics.",
    longDescription:
      "Developed a low-power IoT sensing camera using the OV5640 image sensor with optional Cat.1 LTE connectivity via the EG912U module. The device supports Wi-Fi AP configuration, MQTT/MQTTS image reporting, scheduled and event-based captures, and remote firmware management. Captured images are encoded in Base64 and transmitted as JSON payloads to cloud platforms. The system supports PIR triggers, scheduled captures, and battery monitoring, making it suitable for remote monitoring and edge IoT deployments.",
    tags: [
      "OV5640 Camera",
      "EG912U LTE",
      "MQTT",
      "MQTTS",
      "Embedded Systems",
      "IoT Camera",
      "Wi-Fi AP",
      "JSON Telemetry",
      "Battery Powered",
    ],
    icon: Camera,
    highlight: "MQTT Image Streaming",
    media: [
      { type: "image", src: ne101_mqtt_lte_iot_camera_1 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_2 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_3 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_4 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_5 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_6 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_7 },
      { type: "image", src: ne101_mqtt_lte_iot_camera_8 },
    ],
    hidden: false,
    deliverables: [
      "Embedded Camera Firmware",
      "MQTT/MQTTS Data Integration",
      "Device Configuration Web Interface",
      "IoT Cloud Communication Setup",
      "Hardware Integration Documentation",
    ],
    sections: [
      {
        heading: "NE101 IoT Camera System",
        body: "A battery-powered IoT camera built around the OV5640 sensor and an optional Cat.1 LTE modem (EG912U). The device captures JPEG images on schedule or on PIR trigger, encodes them as Base64, and publishes them inside a JSON payload over MQTT or MQTTS to any cloud broker — all without mains power.",
        images: [ne101_mqtt_lte_iot_camera_1, ne101_mqtt_lte_iot_camera_2],
      },
      {
        heading: "Key Features",
        bullets: [
          { text: "Connectivity", sub: ["Cat.1 LTE via EG912U for remote field deployments without Wi-Fi", "Fallback Wi-Fi AP mode for local configuration and testing", "MQTT and MQTTS (TLS 1.2) transport with configurable broker, topic, and QoS"] },
          { text: "Image Capture & Reporting", sub: ["OV5640 5 MP sensor with configurable resolution and quality", "PIR-triggered and time-scheduled captures", "Base64-encoded JPEG embedded in structured JSON telemetry payload"] },
          { text: "Power & Battery Management", sub: ["Ultra-low-power sleep between captures extends battery life significantly", "Battery voltage reported in every telemetry packet", "Configurable wake interval from 1 minute to 24 hours"] },
          { text: "Remote Management", sub: ["OTA firmware update over LTE/Wi-Fi", "Remote reboot, parameter change, and capture command via MQTT downlink"] },
        ],
      },
      {
        images: [ne101_mqtt_lte_iot_camera_3, ne101_mqtt_lte_iot_camera_4, ne101_mqtt_lte_iot_camera_5],
      },
      {
        heading: "Device Configuration Interface",
        body: "A built-in captive-portal web interface is served over the Wi-Fi AP on first boot. Operators scan a QR code, connect, and set MQTT broker details, APN, capture schedule, and image resolution — all without a laptop or serial cable. Settings persist to flash across reboots.",
        images: [ne101_mqtt_lte_iot_camera_6, ne101_mqtt_lte_iot_camera_7, ne101_mqtt_lte_iot_camera_8],
      },
    ],
  },
  {
    slug: "dbel",
    title: "RF Doorbell Camera Alert System",
    category: "IoT & Connectivity / Embedded Firmware",
    filterSlugs: ["embedded-firmware", "iot-connected-devices"],
    description:
      "Built a low-cost smart doorbell using Raspberry Pi Zero W, Pi Camera, and 433MHz RF receiver to capture visitor images and send MQTT-based notifications through Home Assistant and Telegram.",
    longDescription:
      "Developed a DIY smart doorbell system using Raspberry Pi Zero W, a Pi Camera, and a 433MHz RF receiver to intercept wireless doorbell signals. When the button is pressed, the system captures an image, publishes it over MQTT, and forwards notifications through Home Assistant and Telegram. The solution combines RF event detection, camera control, MQTT messaging, and home automation integration to deliver an affordable connected doorbell with remote image alerts.",
    tags: [
      "Raspberry Pi Zero W",
      "Pi Camera",
      "433MHz RF Receiver",
      "MQTT",
      "Home Assistant",
      "Telegram",
      "Python",
      "GPIO",
      "Rpi-rf",
    ],
    icon: Camera,
    highlight: "RF Doorbell Camera Alerts",
    media: [
      { type: "image", src: pi_camera_doorbell_notifications_1 },
      { type: "image", src: pi_camera_doorbell_notifications_2 },
      { type: "image", src: pi_camera_doorbell_notifications_3 },
      { type: "image", src: pi_camera_doorbell_notifications_4 },
      { type: "image", src: pi_camera_doorbell_notifications_5 },
    ],
    hidden: false,
    deliverables: [
      "Python Doorbell Detection Script",
      "Pi Camera Capture Integration",
      "MQTT Notification Pipeline",
      "Home Assistant Automation Setup",
      "Telegram Alert Integration",
    ],
    sections: [
      {
        heading: "How It Works",
        body: "A 433 MHz RF receiver on a Raspberry Pi Zero W listens for the wireless doorbell button signal. The moment a matching code arrives, the Pi Camera module captures a timestamped image of whoever is at the door, publishes the image over MQTT, and a Home Assistant automation forwards it as a Telegram message — all in under two seconds.",
        images: [pi_camera_doorbell_notifications_1, pi_camera_doorbell_notifications_2],
      },
      {
        heading: "Software Stack",
        bullets: [
          "rpi-rf library decodes 433 MHz OOK signals and matches the learned doorbell code",
          "picamera Python library triggers capture with a short warm-up delay for exposure",
          "paho-mqtt publishes image bytes and metadata to a local Mosquitto broker",
          "Home Assistant MQTT image entity renders the photo in the dashboard",
          "Telegram Bot API delivers the image and a door alert message to a private chat",
        ],
      },
      {
        images: [pi_camera_doorbell_notifications_3, pi_camera_doorbell_notifications_4, pi_camera_doorbell_notifications_5],
      },
    ],
  },
  {
    slug: "nrf5",
    title: "nRF5340 LoRa GNSS IoT Board",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Multi-communication IoT board with Nordic nRF5340 SoC, Semtech SX1302 LoRa, Quectel L96 GNSS, 256Mbit SPI flash, and multiple sensors - designed for asset tracking and environmental monitoring.",
    longDescription:
      "Designed a multi-communication IoT board based on Nordic nRF5340 dual-core SoC with BLE support. The system integrates a Semtech SX1302 LoRa module for long-range connectivity and a Quectel L96 GNSS module for precise positioning. It features 256Mbit external NOR flash via SPI and multiple sensors including DHT20, LSM6DSOX 6-axis IMU, and OPT3001 light sensor. The board supports JTAG, I2C, UART, and GPIO interfaces, enabling scalable applications in asset tracking and environmental monitoring.",
    tags: [
      "nRF5340",
      "SX1302 LoRa",
      "Quectel L96 GNSS",
      "BLE",
      "SPI Flash",
      "DHT20",
      "LSM6DSOX",
      "OPT3001",
      "High-Speed PCB",
    ],
    icon: Antenna,
    highlight: "BLE + LoRa + GNSS",
    media: [
      { type: "image", src: nrf5340Img1 },
      { type: "image", src: nrf5340Img2 },
      { type: "image", src: nrf5340Img3 },
      { type: "image", src: nrf5340Img4 },
      { type: "image", src: nrf5340Img5 },
    ],
    hidden: false,
    deliverables: [
      "Altium PCB + Schematic",
      "Block Diagram",
      "BOM & Gerber Files",
      "Sensor Integration Guide",
    ],
    sections: [
      {
        heading: "Multi-Radio IoT Platform",
        body: "Designed a compact multi-radio IoT board that combines BLE 5.4 (nRF5340), LoRa (SX1302), and GNSS (Quectel L96) on a single PCB — enabling asset tracking applications that need long-range uplinks, precise location, and short-range configuration in one device.",
        images: [nrf5340Img1, nrf5340Img2],
      },
      {
        heading: "Radio Architecture",
        bullets: [
          { text: "Nordic nRF5340 — Dual-Core SoC", sub: ["Application core (128 MHz Cortex-M33) runs sensor fusion and application logic", "Network core manages BLE 5.4 stack independently for real-time reliability"] },
          { text: "Semtech SX1302 — LoRa Module", sub: ["868 / 915 MHz sub-GHz for multi-kilometre outdoor range", "LoRaWAN Class A/C support with OTAA activation", "Connected via high-speed SPI with dedicated DIO interrupt lines"] },
          { text: "Quectel L96 — GNSS Module", sub: ["Multi-constellation GPS + GLONASS + BeiDou", "UART interface with PPS output for timing synchronisation", "Low-power tracking mode: < 1 mA in acquisition"] },
        ],
      },
      {
        heading: "On-Board Sensor Suite",
        bullets: [
          "DHT20 — Temperature and humidity via I²C",
          "LSM6DSOX — 6-axis IMU (accelerometer + gyroscope) for motion and impact detection",
          "OPT3001 — Ambient light sensor for tamper / enclosure-open detection",
          "256 Mbit W25Q256 NOR Flash via SPI for local data buffering when offline",
        ],
        images: [nrf5340Img3, nrf5340Img4, nrf5340Img5],
      },
    ],
  },
  {
    slug: "lgw1",
    title: "ESP32 LoRaWAN Gateway V1",
    category: "IoT / Wireless Sensing",
    filterSlugs: ["iot-connected-devices", "pcb-hardware", "embedded-firmware"],
    description:
      "Single-channel LoRaWAN gateway based on ESP32 with SX1276/78 LoRa, Ethernet, isolated RS485, WiFi, BLE, NOR flash, SD card, and RTC - supporting 96–264VAC input and optional battery backup for industrial IoT.",
    longDescription:
      "Developed a single-channel LoRaWAN gateway based on ESP32 dual-core MCU for versatile IoT deployments. The system integrates SX1276/78 LoRa modules (433/925MHz), Ethernet, RS485 (isolated 1Mbps), WiFi, and BLE connectivity. It features onboard W25Q64 NOR flash, SD card storage, DS3231M high-accuracy RTC with backup battery, and USB debug interface. Designed with expandable I2C, LTE, and IO modules, wide 96–264VAC or DC input support, and optional battery backup, enabling reliable industrial and smart infrastructure applications.",
    tags: [
      "ESP32",
      "SX1276/SX1278",
      "LoRaWAN",
      "W25Q64 NOR Flash",
      "DS3231M RTC",
      "Ethernet",
      "RS485",
      "WiFi",
      "BLE",
      "4G-LTE",
    ],
    icon: Antenna,
    highlight: "Multi-protocol gateway",
    media: [
      { type: "image", src: lorawanGwImg1 },
      { type: "image", src: lorawanGwImg2 },
      { type: "image", src: lorawanGwImg3 },
      { type: "image", src: lorawanGwImg4 },
    ],
    hidden: false,
    deliverables: [
      "ESP32 Firmware",
      "PCB Design Files",
      "Network Architecture Docs",
      "Production Test Guide",
    ],
    sections: [
      {
        heading: "Gateway Overview",
        body: "An industrial-grade single-channel LoRaWAN gateway built on ESP32 dual-core, designed to bridge LoRa field sensors to cloud platforms in environments where off-the-shelf gateways can't be deployed. The board accepts 96–264 VAC mains or DC input and can be expanded with LTE, additional I/O, and battery backup modules.",
        images: [lorawanGwImg1, lorawanGwImg2],
      },
      {
        heading: "Connectivity Stack",
        bullets: [
          "LoRa SX1276/78 at 433 or 915 MHz for wide-area sensor uplinks",
          "Ethernet (W5500) for reliable wired cloud connectivity",
          "RS-485 (optically isolated, 1 Mbps) for Modbus RTU devices on the local bus",
          "Wi-Fi 802.11 b/g/n and BLE 4.2 for local configuration and AP fallback",
          "4G-LTE via optional expansion module (SIM slot onboard)",
        ],
      },
      {
        heading: "Storage & Timekeeping",
        body: "W25Q64 NOR flash provides 8 MB of local packet buffering for store-and-forward when the cloud link is interrupted. DS3231M precision RTC with coin-cell backup ensures accurate timestamping of sensor packets regardless of network availability.",
        images: [lorawanGwImg3, lorawanGwImg4],
      },
    ],
  },
  {
    slug: "apmd",
    title: "AI Predictive Maintenance Digital Twin",
    category: "Linux & BSP",
    filterSlugs: ["embedded-linux-bsp", "embedded-firmware"],
    description:
      "AI-driven predictive maintenance system combining edge AI inference with a Simulink-based digital twin. Hybrid LSTM-Autoencoder achieving 95% early fault detection, optimized C for ARM Linux with <20ms latency and 14-day advance failure warnings.",
    longDescription:
      "Developed an AI-driven predictive maintenance system combining edge AI inference with a Simulink-based digital twin. Implemented a hybrid LSTM-Autoencoder trained on NASA CMAPSS and vibration datasets, achieving 95% early fault detection precision. Converted the model to optimized C for ARM Linux gateways with <20ms latency. Built a Simscape Electrical motor model to simulate bearing degradation and validate repair strategies. Automated retraining and simulation workflows using Bash and TCL scripts, enabling 14-day advance failure warnings.",
    tags: [
      "MATLAB",
      "Simulink",
      "LSTM Autoencoder",
      "ONNX",
      "ARM Linux",
      "Edge AI",
      "Vibration Analysis",
      "Python",
    ],
    icon: Server,
    highlight: "95% fault detection",
    media: [
      { type: "image", src: predMaintImg1 },
      { type: "image", src: predMaintImg2 },
      { type: "image", src: predMaintImg3 },
      { type: "image", src: predMaintImg4 },
    ],
    hidden: false,
    deliverables: [
      "Simulink Digital Twin Model",
      "LSTM-Autoencoder ONNX",
      "ARM Linux Edge Firmware",
      "Retraining Pipeline Scripts",
    ],
    sections: [
      {
        heading: "System Overview",
        body: "An AI-driven predictive maintenance platform that fuses a physics-based Simulink digital twin with an edge-deployed LSTM-Autoencoder to detect motor bearing faults up to 14 days before failure — without requiring expensive test rigs or cloud round-trips.",
        images: [predMaintImg1, predMaintImg2],
      },
      {
        heading: "AI Model Architecture",
        bullets: [
          { text: "Hybrid LSTM-Autoencoder", sub: ["Trained on NASA CMAPSS dataset and real vibration recordings from industrial motors", "Encoder compresses 50-sample vibration windows into a 16-dim health embedding", "Reconstruction error acts as an anomaly score — rising score = degrading bearing"] },
          { text: "Model Export & Deployment", sub: ["Converted to ONNX, then compiled to optimised C via ONNX Runtime for ARM Linux", "Inference latency < 20 ms on Cortex-A53 at 1.2 GHz with no GPU required", "Single binary, no Python runtime dependency on the gateway"] },
        ],
      },
      {
        heading: "Digital Twin — Simulink / Simscape",
        body: "A Simscape Electrical model simulates the motor-bearing-load system with configurable stiffness, damping, and imbalance parameters. When the AI detects an anomaly it runs the twin to estimate remaining useful life and simulate the effect of proposed repair strategies — all offline, all deterministic.",
        images: [predMaintImg3, predMaintImg4],
      },
      {
        heading: "System Performance",
        bullets: [
          "95% early fault detection precision on held-out CMAPSS test data",
          "14-day advance warning on bearing failures in field validation",
          "< 20 ms end-to-end inference latency on ARM Linux gateway hardware",
          "Automated nightly retraining via Bash + TCL scripts on new vibration data",
        ],
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
        <div className={`grid gap-3 ${section.images.length === 1 ? "grid-cols-1" : section.images.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
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

      {/* Desktop prev / next */}
      <button
        className="hidden md:flex fixed left-2 lg:left-5 top-1/2 -translate-y-1/2 z-[210] w-10 h-10 items-center justify-center rounded-full bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        data-testid="button-prev-project"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="hidden md:flex fixed right-2 lg:right-5 top-1/2 -translate-y-1/2 z-[210] w-10 h-10 items-center justify-center rounded-full bg-card border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        data-testid="button-next-project"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div
        className="relative w-full max-w-3xl max-h-[calc(100vh-4rem)] overflow-y-auto rounded-xl bg-card border border-border/50 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
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
            <div className="hidden md:flex items-center gap-1.5">
              <button
                className="flex w-7 h-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                className="flex w-7 h-7 items-center justify-center rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                onClick={(e) => { e.stopPropagation(); onNext(); }}
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="button-close-modal"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero media carousel — full width at top */}
        <div className="relative overflow-hidden border-b border-border/30">
          <MediaSlider key={project.title} media={project.media} className="w-full" isModal />
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

        {/* Mobile prev/next */}
        <div className="flex md:hidden items-center justify-between px-6 pt-4">
          <Button size="sm" variant="outline" className="border-border/60 text-muted-foreground gap-1 font-mono text-xs" onClick={onPrev}>
            <ChevronLeft className="w-3.5 h-3.5" /> Prev
          </Button>
          <Button size="sm" variant="outline" className="border-border/60 text-muted-foreground gap-1 font-mono text-xs" onClick={onNext}>
            Next <ChevronRight className="w-3.5 h-3.5" />
          </Button>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, idx) => {
            const Icon = project.icon;
            const isRecommended = recommended.has(project.slug);
            const globalIdx = projects.indexOf(project);
            const devCode = `DEV_${String(globalIdx).padStart(3, "0")}`;

            return (
              <div
                key={project.slug}
                data-testid={`card-project-${idx}`}
                className="group cursor-pointer rounded-xl border border-border/50 hover:border-primary/40 bg-card transition-all duration-300 relative overflow-hidden flex flex-col"
                onClick={() => openProject(idx)}
              >
                {/* Top meta row */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30">
                  <span className="text-[10px] font-mono text-muted-foreground/50 tracking-widest uppercase">
                    {devCode}
                  </span>
                  <span className="text-[10px] font-mono text-primary/70 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Image carousel */}
                <div className="relative h-52 overflow-hidden">
                  <MediaSlider media={project.media} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent pointer-events-none" />
                  {/* Highlight badge — top right */}
                  <div className="absolute top-2 right-2 z-10">
                    <span className="text-[10px] font-mono text-primary bg-primary/15 border border-primary/40 rounded px-2 py-0.5 backdrop-blur-sm">
                      {project.highlight}
                    </span>
                  </div>
                  {/* Project icon — bottom left, keeps recommend toggle */}
                  <div
                    className="absolute bottom-3 left-3 z-10"
                    onClick={(e) => toggleRecommended(project.slug, e)}
                  >
                    <div className={`w-9 h-9 rounded-lg backdrop-blur-sm flex items-center justify-center border transition-colors ${isRecommended ? "bg-primary/20 border-primary/60" : "bg-background/80 border-border/50 group-hover:border-primary/50"}`}>
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <h3 className="text-base font-display font-bold leading-snug group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground/75 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono border border-border/60 text-muted-foreground rounded px-1.5 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] font-mono border border-border/60 text-muted-foreground rounded px-1.5 py-0.5">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between pt-2 mt-auto border-t border-border/30">
                    <span className="text-[10px] font-mono text-muted-foreground/40">
                      {project.deliverables.length} deliverables
                    </span>
                    <div className="flex items-center gap-1 text-xs font-mono text-primary/70 group-hover:text-primary transition-colors">
                      Read Datasheet
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
