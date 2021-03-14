import municipalities from ".";

describe("municipalities array", () => {
  it("contain all Spain's municipalities", () => {
    expect(municipalities.length).toBe(8131);
  });

  it("check Valladolid object", () => {
    expect(municipalities[7429]).toStrictEqual({
      code: "186",
      name: "Valladolid",
      commCode: "07",
      provCode: "47",
      dc: "8",
    });
  });

  it("check Alicante/Alacant object", () => {
    expect(municipalities[150]).toStrictEqual({
      code: "014",
      name: "Alicante/Alacant",
      commCode: "10",
      provCode: "03",
      dc: "9",
    });
  });

  it("check number of municipalities in province 47", () => {
    expect(municipalities.filter((m) => m.provCode === "47").length).toBe(225);
  });

  it("check number of municipalities in province 06", () => {
    expect(municipalities.filter((m) => m.provCode === "06").length).toBe(165);
  });

  it("check number of municipalities in autonomous community 07", () => {
    expect(municipalities.filter((m) => m.commCode === "07").length).toBe(2248);
  });

  it("check number of municipalities in autonomous community 08", () => {
    expect(municipalities.filter((m) => m.commCode === "08").length).toBe(919);
  });
});
