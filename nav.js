document.write(`
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <!-- google font link -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <!-- box icon cdn link -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
    <nav>
        <div class="navbar">
            <i class='bx bx-menu'></i>
            <div class="logo"><a href="index_Nann_A4A6YY.html">NannTheint</a></div>
            <div class="nav-link" id="nav-links">
                <div class="sidebar-logo">
                    <span class="logo_name">NannTheint</span>
                    <i class='bx bx-x'></i>
                </div>
                <ul class="links">
                    <li><a data-active="home" href="index_Nann_A4A6YY.html">Home</a></li>
                    <li><a data-active="about" href="about.html">About</a></li>
                    <li><a data-active="projects" href="project.html">Projects</a></li>
                    <li><a data-active="gallery" href="gallery.html">Gallery</a></li>
                    <li>
                        <a href="#" data-active="more">More</a>
                        <i class='bx bxs-chevron-down arrow' id="arrow-down"></i>
                        <ul class="sub-menu">
                            <li><a href="country.html">My country</a></li>
                            <li><a href="hobbies.html">Hobbies</a></li>
                            <li><a href="food.html">Favorite Food</a></li>
                        </ul>
                    </li>
                    <li><a data-active="contact" href="contact.html">Contact</a></li>

                </ul>
            </div>
            <div class="social">
                <a href="https://www.instagram.com/suajk97"><i class='bx bxl-instagram bx-rotate-90'
                        style='color:#ffffff'></i></a>
                <a href="https://www.linkedin.com/in/nann-theint-kham-ko-ko-767035262/"><i class='bx bxl-linkedin'
                        style='color:#ffffff'></i></a>
                <a href="https://github.com/nanntheintkham"><i class='bx bxl-github' style='color:#ffffff'></i></a>
            </div>
        </div>
    </nav>
    <script src="script.js"></script>
</body>

`);

