fetch('data/wisata.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(location => {
            // Tambahkan marker untuk setiap lokasi
            L.marker([location.lat, location.lng]).addTo(map)
                .bindPopup(`
                    <div style="text-align: center;">
                        <h3>${location.name}</h3>
                        <img src="${location.image}" alt="${location.name}" style="width: 100%; height: auto; max-width: 200px; border-radius: 10px; margin-bottom: 10px;">
                        <p>${location.description}</p>
                        <a href="${location.link}" target="_blank" style="color: blue; text-decoration: underline;">Selengkapnya</a>
                    </div>
                `);
        });
    })
    .catch(error => console.error('Error loading wisata data:', error));
