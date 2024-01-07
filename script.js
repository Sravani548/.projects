const mainDiv = document.getElementById('heros_library')
const heros = [ 
    {
        title:"Chiranjeevi",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxNQb0dmQx7uUr6FjTBbTZ1R08XrpmBXFH99TLHMVcyBN_npmnSg-IFg3lH9ngXEGTIQ&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Chiranjeevi",
        name:"Mega Star",   
    },
    {
        title:"Bala Krishna",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUK4xbAeNCzk4wb0WAPR3w9p_RZ1ys0AXqw&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Nandamuri_Balakrishna",
        name:"Balayaa",
    },
    {
        title:"Nagarjuna",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhp2QmB5dmoOjmYtTQvIWGvHAu0_aivVNsyQ&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Nagarjuna_(actor)",
        name:"Manmadhudu",
    },
    {
    title:"Pawan Kalyan",
    imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIeVapY0VLGBExAOFAfIHu-WsoujdDhC-yAw&usqp=CAU",
    link:"https://en.wikipedia.org/wiki/Pawan_Kalyan",
    name:"Power Star",
    },
    {
        title:"Venkatesh",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiFWKvmYVmmRwWf27lXtqAS3aMzVXmVTR0Y18OapAZqk6XMORCSDeB2zwszJWNgCJPnw&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Venkatesh_(actor)",
        name:"Victory Venky",
    },
    {
        title:"Ram Charan",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3KA9nqXPLq4VqYbpRd7Ix_S4VefjUGdkMw&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Ram_Charan",
        name:"Mega Power Star",
    },
    {
        title:"Varun Tej",
        link:"https://en.wikipedia.org/wiki/Varun_Tej",
        imageLiink:"https://miro.medium.com/v2/resize:fit:1080/1*ya6iKgAAyc_NAL6VUCyI7g.png",
        name:"Mega Prince",
    },
    {
        title:"Sai Dharam Tej",
        link:"https://en.wikipedia.org/wiki/Sai_Dharam_Tej",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mQlHydXJKIJVkvYmVtC3Zq0yuWe01_wO1AZpm7qOAd3twq8LmX94GHFOkqeE7iGwZW8&usqp=CAU",
        name:"Dharam Tej",
    },
    {
        title:"Allu Arjun",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizNLj0MxH0K4G6Xt1p58xcTncVYd8atdhkg&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Allu_Arjun",
        name:"Stylish Star",
    },
    {
        title:"Nani",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdeVhUyfNh7tFNEXYL3s_XCqy_RGwe6wVIdg&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Nani_(actor)",
        name:"Natural Star",
    },
    {
        title:"Prabhas",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWdiW2vxBWxz7Pw4nDbDUZJTjLxEB6RSAbXgHb6d5XB2VsumzwmFX3O0b2qZ_N82z12MA&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Prabhas",
        name:"Rebel Star",
    },
    {
        title:"NTR",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmeHcl54vzf5SJgVFccfvLQP0Ybf6Adnc6A&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/N._T._Rama_Rao_Jr.",
        name:"Young Tiger",
    },
    {
        title:"Mahesh Babu",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4pvp5Ns9TEiEX6v76kdc9BQtAyPxePR5-KtDSYbabSgq4pFQRTp-wmKNfflJIrfRC_O4&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Mahesh_Babu",
        name:"Prince",
    },
    {
        title:"Akhil Akkineni",
        imageLiink:"https://im.rediff.com/movies/2015/nov/10akhil1.jpg",
        link:"https://en.wikipedia.org/wiki/Akhil_Akkineni",
        name:"Yuva King",
    },
    {
        title:"Vijay Devarakonda",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxuwsds7XQfxfgnPEXsFOoiUpLDMH0s8f06grsJsG3x7Y5Yy1OmlfFj7rDhMBZNwYqw4&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Vijay_Deverakonda",
        name:"The Vijay Deverakonda",
    },
    {
        title:"Ram Pothineni",
        imageLiink:"https://content.tupaki.com/twdata/2020/1220/news/Ram-Pothineni-Turns-Chief-Guest-For-Prestigious-Nepali-Event-1607224602-1311.jpg",
        link:"https://en.wikipedia.org/wiki/Ram_Pothineni",
        name:"Energitic Star",
    },
    {
        title:"Dhanush",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXE1s6BpKKVxHt54h23hiq_TS_BxGWUoh9c-mPIDNDnFLd2Qzf_oj1WzdmP_BVzTWbe8&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Dhanush",
        name:"Energitic Star",
    },
    {
        title:"Naga Chaithanya",
        imageLiink:"https://wikibio.in/wp-content/uploads/2022/11/Naga-Chaitanya.jpg",
        link:"https://en.wikipedia.org/wiki/Naga_Chaitanya",
        name:"Yuva Samrat",
    },
    {
        title:"Gopi Chand",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzI6n4dsnlqiQ3fs1A0mImrsdp44PGGsyjVw&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Gopichand_(actor)",
        name:"gopichand",
    },
    {
        title:"Naga Shaurya",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJdKONl-wSVpvwS-V8bzPs86_60mhESmUMB4ln9AeTZm0GYDx_LttibbKVWoWZINvO3Wc&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Naga_shaurya",
        name:"shaurya",
    },
    {
        title:"Ravi Teja",
        imageLiink:"https://1.bp.blogspot.com/-_sOyubrtUiU/X9GVPYsCZ_I/AAAAAAAAIuQ/0HwHUjERE1wELDCwobDGyZOEfui8TtwAgCLcBGAsYHQ/s1068/Ravi-Teja-Height-Weight-Body-Measurements.jpg",
        link:"https://en.wikipedia.org/wiki/Ravi_Teja",
        name:"Mass Maha Raja",
    },
    {
        title:"Nithiin",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-9p_R5kCgO9EzTCDDFRDslKRUUkV9SwM_rA&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Nithiin",
        name:"Nithiin",
    },
    {
        title:"Nikhil Siddhartha",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdJPo3SLZfjdlGMl-PRLI6J7ykljk-sM_oDw&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Nikhil_Siddhartha",
        name:"Nikhil",
    },
    {
        title:"Rana Daggubati",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7nkBiXu-4fPAg-ukbqTsxbTbjzanaJn2HOA&usqp=CAU",
        link:"https://en.wikipedia.org/wiki/Rana_Daggubati",
        name:"Rana",
    },
    {
        title:"Vijay Thalapathi",
        link:"https://en.wikipedia.org/wiki/Vijay_Thalapathi",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2P-RJgKhFe4_kGlnTUQHfQ6l0AyzIfc9YDfTyzjfPmkoki8cIQhEgTRbKAYgGS_Xudl4&usqp=CAU",
        name:"Vijay",
    },
    {
        title:"Sharwanand",
        link:"https://en.wikipedia.org/wiki/Sharwanand",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPUNb4TMgRqb4JZROuxNKtBZqXtLTN1ehwQg&usqp=CAU",
        name:"Sharwa",
    },
    {
        title:"Sudheer Babu",
        link:"https://en.wikipedia.org/wiki/Sudheer_Babu",
        imageLiink:"https://m.media-amazon.com/images/M/MV5BOTZkMzBhZTktYjZlZS00MWVhLThhNWEtZDA5MGVmYzJlYjQzXkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_.jpg",
        name:"Sudheer",
    },
    {
        title:"Sunil Varma",
        link:"https://en.wikipedia.org/wiki/Sunil_(actor)",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLtMSF_-tFd0PUsNAfuOrChhvwE-IbBd6KvCE8G4D8DkwXBFl4xoremeIJz7Zqoae6O_Q&usqp=CAU",
        name:"Sunil",
    },
    {
        title:"Kalyan Ram",
        link:"https://en.wikipedia.org/wiki/Nandamuri_Kalyan_Ram",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBva6bjuSMpovuFmzEOolLf2lyAPArkzt4iw&usqp=CAU",
        name:"Kalyan Ram",
    },
    {
        title:"SivaKarthikeyan",
        link:"https://en.wikipedia.org/wiki/SivaKarthikeyan",
        imageLiink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYpu8CpXuCiph9Vw8g_lIAxQMO0Oj4qG97Q&usqp=CAU",
        name:"Karthikeyan",
    },
]
heros.forEach(function(hero){
    console.log(hero.name);
    const heroDiv = document.createElement('div')
    const img = document.createElement('img')
    img.src = hero.imageLiink
    img.alt = hero.name
    const title = document.createElement('h2')
    title.textContent = hero.title
    const button = document.createElement('button')
    const anchor = document.createElement('a')
    anchor.href = hero.link
    anchor.target = "_blank"
    anchor.textContent = "Read More"
    button.appendChild(anchor)
    heroDiv.appendChild(img)
    heroDiv.appendChild(title)
    heroDiv.appendChild(button)
    heroDiv.classList.add('hero');
    mainDiv.appendChild(heroDiv)
})
