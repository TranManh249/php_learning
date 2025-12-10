function sayHello() {
  console.log("Hello! My name is Manh i'm a pro designer in VietNam");
  document.writeln(
    "Hello! My name is Manh, i'm a pro designer in VietNam <br>"
  );
}
function le(limit) {
  console.log("Day la danh sach so le tu 0 den " + limit);
  document.writeln("Day la danh sach so le tu 0 den " + limit + "<br>");
  for (let i = 0; i <= limit; i++) {
    if (i % 2 == 0) {
      continue;
    }
    console.log(i);
    document.writeln(i + "  ");
  }
}
// // --- Khởi tạo DOM cho donut ---
// const donut = document.createElement("pre");
// donut.style.fontFamily = "monospace";
// donut.style.color = "white";
// donut.style.fontSize = "9px";
// donut.style.lineHeight = "6px";
// donut.style.textAlign = "center";
// donut.style.marginTop = "10px"; // padding top
// donut.style.marginBottom = "10px";
// document.body.appendChild(donut);

// // --- Cấu hình Torus ---
// const width = 80;
// const height = 60;
// const Astep = 0.07;
// const Bstep = 0.03;
// const R1 = 1;
// const R2 = 2;
// const K2 = 5;
// const K1 = (width * K2 * 3) / (8 * (R1 + R2));
// const chars = ".,-~:;=!*#$@";

// let A = 0;
// let B = 0;

// // --- Hàm vẽ donut 3D ASCII ---
// function renderDonut() {
//   const output = [];
//   const zbuffer = [];

//   for (let i = 0; i < width * height; i++) {
//     output[i] = " ";
//     zbuffer[i] = 0;
//   }

//   for (let theta = 0; theta < 2 * Math.PI; theta += Astep) {
//     for (let phi = 0; phi < 2 * Math.PI; phi += Bstep) {
//       const cosTheta = Math.cos(theta);
//       const sinTheta = Math.sin(theta);
//       const cosPhi = Math.cos(phi);
//       const sinPhi = Math.sin(phi);

//       const circleX = R2 + R1 * cosTheta;
//       const circleY = R1 * sinTheta;

//       const x =
//         circleX * (Math.cos(B) * cosPhi + Math.sin(A) * Math.sin(B) * sinPhi) -
//         circleY * Math.cos(A) * Math.sin(B);
//       const y =
//         circleX * (Math.sin(B) * cosPhi - Math.sin(A) * Math.cos(B) * sinPhi) +
//         circleY * Math.cos(A) * Math.cos(B);
//       const z = K2 + Math.cos(A) * circleX * sinPhi + circleY * Math.sin(A);

//       const ooz = 1 / z;
//       const xp = Math.floor(width / 2 + K1 * ooz * x);
//       const yp = Math.floor(height / 2 - K1 * ooz * y);
//       const idx = xp + width * yp;

//       const L =
//         cosPhi * cosTheta * Math.sin(B) -
//         Math.cos(A) * cosTheta * sinPhi -
//         Math.sin(A) * sinTheta +
//         Math.cos(B) *
//           (Math.cos(A) * sinTheta - cosTheta * Math.sin(A) * sinPhi);

//       if (idx >= 0 && idx < width * height) {
//         if (ooz > zbuffer[idx]) {
//           zbuffer[idx] = ooz;
//           const luminance_index = Math.floor(
//             ((L + 1) * (chars.length - 1)) / 2
//           );
//           output[idx] = chars[luminance_index] || ".";
//         }
//       }
//     }
//   }

//   let result = "";
//   for (let i = 0; i < height; i++) {
//     result += output.slice(i * width, (i + 1) * width).join("") + "\n";
//   }
//   donut.textContent = result;

//   A += 0.07;
//   B += 0.03;
// }

// // --- Chạy liên tục ---
// setInterval(renderDonut, 50);

// Gọi function

sayHello();
le(50);

// renderDonut();
