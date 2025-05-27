const today = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export const AnatomyHealthData = [
  {
    organ: "Lungs",
    image: "public/assets/lungs-new.png",
    status: 80,
    date: today,
  },
  { organ: "Teeth", image: "public/assets/tooth.png", status: 20, date: today },
  { organ: "Bone", image: "public/assets/Bone.png", status: 50, date: today },
];
