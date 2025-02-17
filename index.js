function drawViz(data) {
    const container = document.getElementById("radioContainer");
    container.innerHTML = "";

    data.tables.DEFAULT.forEach(row => {
        let farmType = row.Farmtype;
        let radioId = `radio_${farmType}`;

        let radioInput = `<input type="radio" id="${radioId}" name="farmtype" value="${farmType}">
                          <label for="${radioId}" class="radio-label">${farmType}</label>`;
        
        container.innerHTML += radioInput;
    });
}

// Looker Studio에서 샘플 데이터 불러오기 (실제 데이터 연동 시 수정)
let sampleData = {
    tables: {
        DEFAULT: [
            { Farmtype: "직영" },
            { Farmtype: "위탁" }
        ]
    }
};

drawViz(sampleData);
