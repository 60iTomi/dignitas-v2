<script>
    primaries = ["#2cbf77ff", "#8d1313ff", "#3145acff", "#b66fcfff"]
    secondaries = ["#031b11ff", "#1b0303ff", "#05031bff", "#130a19ff"]


    root.style.setProperty('--primary-color', primaries[Math.floor(Math.random() * primaries.length)]);
    root.style.setProperty('--secondary-color', secondaries[Math.floor(Math.random() * secondaries.length)]);
    

    </script>