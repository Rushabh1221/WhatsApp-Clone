 let $=el=>{
    return document.querySelectorAll(el);
}

let user=[
          "RV Solanki",
          "Tony",
          "Laura",
          "John",          
          "Alicia",
          "Ben",
          "Jenna"          
];
let link=[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQBxVxSMyHIEnzUAqWDobCLStTXcB0IxZSg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTklwFuJtHeMyTp9kadSFAvDohpXN0u9VzNew&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7wSNjY36Y-T7Wigf9bAHVHgWAKbHIrxIpg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uGSTPwGgbpn5qSZPAhgkOdgbsZA3eFnayw&usqp=CAU",          
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3kIr_uDaWZkpwcc6xGDdt5AY0nmZjJq8r-Q&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1fthLFyalUaZz1WmgX_zQbzXSfViq-ChHA&usqp=CAU",
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUYGBgaHBocGBgYGBgaGRoaGhoZGRoYGBgcIS4lHCErIRgYJjgmKy80NTU1HCQ7QDs0Py40NTEBDAwMEA8QHxISHjQrISs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOAA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABAEAACAQIDBQUFBgQGAgMBAAABAgADEQQSIQUxQVFxBiJhgZETMqGxwQdCUmKC0XKS4fAUIzOisvHC4kOD0iT/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAkEQADAQACAwEBAAEFAAAAAAAAAQIRAyESMUEEUWETIjJCcf/aAAwDAQACEQMRAD8A9HjExEwbyCsHijXivJbGK8V4xjXiAUYxRXgIUgxWMSmLuwHIcT0Eg2jiHVbUkzu24kgIv5mJ+QvMPCbBdnL4pw/5FLEH+NiBp+UD9pNVM+y5nfYeM7VoLhSo6kX9OEp4bbNau2WkjPbedyL/ABNuHTfOpVFC5QoCgWygDKB03QkUAWAAA4DQekyfLvw1mUvhhVqOMUXyI/gjnN5Z1UH1kuCXEvvQIPzsL+QTN8bTZBhXkf6jK0LA0HX33VxyCEW/UWMuGip3G0pK0kWpDzolymHUpFdTu5zm9u9qqeH7o778uAnUU604zbXYha2KFVWtSbWomubMPwHcA3w1tv00nkT9kzC3szMDtraGLYigAiXsXIsq+APE+AvOhwvZ599fGYh25I/s08gNZtYbCqihEUKq6KoFgByEmyyvLTRmelF6NiKj1E3MHszpfcwcC5HMGaIkeKsEN9b90DmTDXSwlowoKIGKKUmRgUUEGFKAIGPBEcQGPFFFACImKKCZACMaOYN4AOTI6rhVLHcASY5Mo7bv/h6lt+UwEjlcf23AYhBoNLyfs/2iqYmpkVdALu3BRw8zwnmaI7uqICzsQqjmSbAT1/YOzEwlFad1zHvOxsC78bX3gbh4CTbz0azhsFohApuGAKkEcCCCD5iSTlpvTRIUUe0VpJRW2hjUoo1R2AVRqT/TU9BvNgNTOGr/AGguXtToKRcAGo7Am+g7qEBfMt1l77TKVQ0qbLcorNnA4aAqW8BlM81tOvhiXOmF09w+gaeFIRTUyo+gbI7MgYkAKM+/Ugbr6wFuCVbeLXtexBvZh4Gx6EETxvC7Uxdd6FD21RwKlPIhYmxVgVJ4tltfW9st56v2h2aa1aiVrPSNMOzGmQGYOVCqb3Frq28HcY+WJ8d9BFPcNBTJkaVqFMqLF2fxfLf/AGqB8JMhnHpvhZK8YzkAXJsBvJj0jMvGI9RyrjLTU+7fVzzPJfDjN+N70RTwKk5qNn+4NEHPm5+ktCCI82MGwgY4ggxwYwCiBjXjykJh3iEEGEIIBXMUa0UYEcURjXkDGJg3jkwYCEYFWmGUqeII9YRMaGBpwnY3s+UxFaq6+45SlfiWsWcdAbX8WlDt/tHEJiPY58iZFcBHILgllzVCLG91ayagC3Ekzt9r4w06OIemR7SlTz2texYmzEdEc+U8e2hjKmIql3JepUIFgLknQKiKPIACVC+hb+HbfZxtKo7VabsWAVXDMSTfNl1J36Ea77AcAJ2u0MSadKpUClsiM+UaXygta/DdMrsF2eNCiXqDvvvGmmo0uN4FlHK6ta4M64oLFSBY6EW0IOliOMyri8q34aTXjOHi2N7a4xycrrTHJEF7fxPc+lp3H2dYmrXw7vWd3tUKo7byuVSRfjYkyPGdi8BTdT7Gq4ZjdFqNlpqBcvYd4qDlFgT726dXhXw9OmoRqaU1FlysoRQOG+0tcc/wbvoOrg0dcrLcGcdjvs4w7NmQ1EB4U2Qr/I47vQNbwE67DEu/tLEIFypcEFrkFnseGigdCeMuy0kvRD7OZ7P9laGFOalTZqhFva1mUkA78qpoPIC/ObQwlrnMSxN2J46aAcgOX9ZcjGKpVLGOaa9FBlIOsdZcdAdDKRWxtOLk43LN5rSzSgYpdQYdOPiV7t+UON5RFrUVI94F4U6zAMRwYCmFeABCOIMIGAx7woMdTKTFgeaKNcRRhhCTGiMRMgACYxiMaNAKMYojFTxBK7KVHCZHZ6SKz1P9TPp7QcMzgG2UaDQixItrcSYDYFJGLJQoUSbg+xQByDvHtMqkKeQA68JpYelYX4n5Syoj401PY6zSKrhldChHdIy2Glhwy23W4W3WErImJUZQ1N+Adwyt+tF0Y9CvQS/e0r4nGogLMwAG9mIUeplO0vY1LfobC4Upd3bO7WzNawsNyov3VFzpc79STD/wlPNnyJm/FlXN675jJ2lpVLik4cjfk4eZ4eIjnG1G+6B1JMzfL/EaTxNm6XHMQTVXnOP2rt/2OjNdvwIouOpJsswanaTGvrSTu88rP/xUARedv4DhI9PFVeYhAg7p5I/a3GJ/qIR4qLf7HA+cgwX2lYhf9WijgAG6XRrXIOhuLjyjVX/BOUj2ICU8QO8ZzGxftAwlchfaGm5+5VGW55BvdPrOkZ83e5zPmrVjRULvSxhpM63BHhK+GOssznl4XXZmRAx6gsxEU7l6OUe8MGAIQMQBgxwYEcQAkiBjCPGhjxRRRiIoJMdoJkgMY0RjRoBEw6S3IEjklI2IMjkpLEypWl4zO2rtujh0L1HVF5neTyRRqx6CYnabtdSw4ZQQ9QbqancbXu7fd6b/AAnk2Aq1cfimNcs7FWNgSAoBFlUfdA5et5Wuv8IpTh2G2vtMe9qFIqCLipV3kXtdVGgHiTw3R9hdoUxRC1SHY8HAN+l9IXaHs6zhMRQpiomQI6ZM5RlzZWNMe9vtbgQNOIz+yvYyu7AVTUpotznZSrBgCECK2p11PCwtF4zmr2XNVLx+jvtn7JpIxdEClgAbbtNdBuHlNQUrcJR2I7mmocd8XV7bsykqSPA2uOs2CsT9F6Zj4GlmLmmmfS7FRm00GspbT2xTpC7sqjxO/pzk/aDGeypO9ibDQDeTuAHiTPP+1GwGpoKmILvVq02KEEBErA39mN1lykW52Y9CVoU8OiXtLhqoKe0UE7gbj5gTznbSBa77rZreFmy//qFsbZrV3SiaRVnZQCD3gAQXbiLBb75HtbZzUXemTmCuQrjcQvLlYgacDNEsMqbpejDqpZgOfz/7m9sDtVicKQEYvT3+yckr4heKnpp4THxg+90P1gMOX8S9DwjaTWMj0+j6D7L7bp4qktanuNwym10Yb1Nuo14gg8ZutunkP2O1CK1dQe6RTa3AHvj++k9dqbpxck+FNI2l6ijifegSTEHceokQnRxvZRhX/JjiFAhCUxBrHEFYQgAYMeBDgMeKKKAEDGNFBgIaImPBJlIBmawvPNO2O3cU1U0Ec06dhcJ3Wa9x3n38Nwt5z0phOF7Y7PyOKoGhGU9b3X5fGY1q5E/hrGeL/pwqYfLQ04hj6vb5TZ+zakBiHJ/ALeshNL/LtyU/B/6w+xtXJiVB++rL5jUfWaV9LSWo9Z/wqNrlF/j6iEuzaY1CLfnYX9YeGOktg6SUi2yvRQLoJbzSFVu0kqaQYiti8KHFmFx467pVxeBLqUZyVO9HCOh/S4PwmmrSNzBdD99GPhdjCmCEyUwwszU0COw5ZySQOlpxPbnABMpQWUaWE9HqPpOL7ajNRY8ovLsrw2WeX4hbj+/733lcmwB5aeUu5LkHn/2P78ZWqrlcrwP1m6ORncfZFUC4mqh3lFI6K3/tPY657png3YLFeyx1K/31ZD1tcfFB6z3iobqTOP8AQuzTjfRTbVehkYh095HMGVKuIym2R23aqtxqbb/KV+etWC5llaWZj4raLrXVAyBLhdc17tlblqQDoAePjpfGK3dx9fycxfXlvtIKqoXDmm9xr7twToQSAd4yD4ToZkaQhSmmLB3I/wDJu4666Q2xdhfJU6BNePDy+IkgXBHEFY4gCCiivHgMrmCYUZoaIGNHjGUgBJmftjBCrTdDvINjyI1E0CJS2piBTpO5+6jH4TPlXWlR7PL6PukcQSPXX5yg90daib0YMPnbzEk2VWLr3t5uCfEaiWKiA7/7/v6SzRM9V2VilqIjqbhgCPOaiNeecdgNqBS2Gc7iWS/I6lfW59Z3zUzvVrfGSWnpMUcNdTccv6xMlRiNQo4i1/jOfrY/EqxXMotu0Iv4xHaWJBuSvmRaDWm08VNdYdL7O0iaZuCx1ep91QOdz8BaXsjcTJ0ly5fZDXacR20xAWkwJ3zrNoYgICSZ5J2s2r7er7JTcX1twEUztDqskp4ZLoh8RKGMF6rW4X+E0gAMq8Br5AW+sqYNMwdz95tOguf3m5yP+D4eqUenUT3kcEdQAR8bz6IwFcPRVxuZbjoRcfC0+eKNO40+64+BP7T2j7OcXnwNLW5VSp/QSn/iJhzz1pcfw1vaWYHxhOO8ZWrNrLFQ638B8ph+Wv8Ac0XzLpMQiiEU7WcwQhiCI4kgFCEEQhAEHFGiho+yAwWhGCYJCY0Yx4zShAmY3aemWw1RRxGvSbEiroGUg8ZFrZKl4zx2hQKXI6jqNZdxC3BI4i468vW/rL21sFkLLbcwt0Jt9ZSptoRyysOh0PxHxhxPZNH0zOLstRHQkHSxG8HeD66ec9L7J9qExAKMQtZNHTn+dOYPwnm+KTTThqP+QmVtTMlRKtMlWtcMpsQV3EHpaXg287Pf6mFRxqAYFPZSA3tfrPLtgfaYyALiVLAae0S2b9SnQ9QfKdrhu2VCooZM5v8AlI+cilhpFt+mdR3V0Eytq7USmpLMAOswMZtuo3uLlHM6zm8ervcuxY+JkFmT2v7WVKhKU7qp0LcT05TF2dgiveb3j8PDrL+Iw658xt3d3IeMVJ7pmHHd04H0F5vKxHPXb1sp4l7I7fpHTdp6mX8HhsqC/wB1bnrYsfgryvi6VxTT8TD0G/5zTxJy0KjfiIUdCQPktUShFDZVG6cyW+Q/7npH2UP/APxvyD1LdM39ZxNCn7KgzHelNm/Wwuo9bTtuwGH9jgFB0L9711+vwnN+ikoLiW2jdqNdxLtQagcgPlKOBTO95fqG7HrOf8q7bL530kMIohFO5nKGI4jCPJAIQhujLHEAQUUUUBkJgmFBMBDRjFEZQgDBMIxjBjOX7W4UZC/iv/IGcdTXVPFHX0IP0M7PttWslNPxOT5KpB/5icem5D/GfUNCJ8UXulSvvI/Lf4lfpM/aNO+QeB+QEuVz/mf/AFt82P7SPHrr0uP79JTK05h6JAvwvOh7KYqxKHymXiNFI6GLY1TLUk0tQS0qR6rh1BEydt1Qgyj3iL9Buv1O4ecsYHFhULHcBc+U5vaOLPeqPvJvbxPuqOgtImd7ZrdYZm0QWyoPvHX+G/yJ08jLrILhRuFh/T0tK2AokvnfedT4DcFHgNJo0k7y/qb6CbGBVqqDiKa/gRmPVu6PgJo1qOdaKEaZ2dvFaaBgP5q1vOZuEbNiK7cgFHpa3qp9Z0Xse8g4kBF6B3L/APBPQRNlStKO0MOzqKQBYuQWA463Y+l53dJu6lNNygAW+JnCbKSpWxr5M2Wndbi4F2Fjc9L6T0zZ2DCC538T9Jw/oevGdEte0Xtn4XKPHnJjg24WMFaslStM+Plc+iLjy7ZXZCN4jCaKuG0IBlevhrd4bvlOqeVV0c9S0QQoIEITQkJY4iEQgMKKNePACJoBkhgGAgTGjtGlIBjAMMiYXavbP+Hpd0/5j6J4c38vnaMDle2O0Q9fKuq0wVuPxb3PrZfKZraZRyW3yX95n0jc/EyTH4rIrPx+7fnuX4m80zBoizZ3qsNcqlAfEAX+Ilyn7P2qGouZCe8NdxDAbvIyKnSCXUbmW/iSvdb4FD6yCgc1MW3gW/kOX6X85FLrC5fZ0GL7FUayM2ErAsdcrm9vy3HeXzBnFVdk18NWC1kZDwO9W/hYaGdv2be5DX8LjTXrOtxNJaiZKgDqeY16/wBZxrmcvKNXK3UefrV/y8vNlB6b/pMzagzPTThq59bD6zpdp7FekpcEFFZbanNroNLeImHiaf8AmI35GHoR+86uNqlqM77Y4+9/Db1J/aWdzE8l/aU0b3hyIPlofqZYxB9/+Fvkp+strsleilsQaOeLEE+Zm1i8Vkq0ib2Ckm28B7KbfykzJ2bpcfkHwJ/cRu0Fa1dL7jTA8w9QftE0NPEdv2W2gisaZC98sUZbasPfS/HgwPEHwnWBiZ5JgXNioNj7yHky6g38Pleej7A2p7ekGPvjuuPzc/P5gzh/TwtPyRtx38NfNDWpILx805kaMv0Xlum/PjM+i1gPGWKTzSXhnS0CtTytb0giXK63W/KVBO2K8kc1LGKEIwhSgFFHigBEYLQrRoCAMaPaM0EAzTzLtjSqPiKjsO4pVVPIFbjTxN56Y50nDdv2VURtRdu9bcQoJBPrBVlJDS6041WA6cZT2muYZTvK3A5fhv4k/SS7PfOSxFlXQD69bfOV8TUuxfx3+F7D42nQ+wXo0cHWzUUc71tm6e61/Ik/piRMjuv3W7w66Bh/x+MDZrDvIdxvp4Ne/wA3HpJ6ikqrfeXXqV7rgdbNBgifZ1M5yodlI1FjofG07PAU2axZyRyFhfqZw9OpldHG69j/AAt/fwna7EqXYD+9Lzz+eMo6JfQttYcOpSwGhtvJzbxbzE4xjdQw4WPluP0M9Cx4s6ab76ce7bXprOE2hh/ZVnS2l7r/AAtcj5kdQZp+as2SOT+mc+j+Di3pf95bqPuPP6gj9pE9K4y8RqhkbElPEG/S/wCzTraM0DhjYqTu90+YH1gdpaZNNKg3oxVujAfVP90Nhe4H3hcdd/7y0ye1pMh++ung4t/5BYNB/gj2fU9x/AE+PMTpey1XJiXQHutceYzEH/Y3804zA1yiBiPdUC35tAB6mdf2Rolq2c8NSfEKy/E1G/lMy5e4elx7R3kAG7BecInSLAC7k8hPLR0lx21kiGQHfJacYi9SaVqiWJEkpPCxI3GdHDXeGHJP0hEeKITpRkKKPFKAjjMIZEGSJgMI0KCRACDEsFUkmwGpPhPKu12O9ta+9yCi8EpjUMR+Jzr0nofae5o5B/8AI6J5Me98AZ5LjHL12J5ny1sB5DSETtaPckdUyIFXTMfnreUq9mzoOAI9N3ylzFN3gOX1mfhvea/X4m83+jfSHwWI9x+RCt0bT52nQpz5NfyP9b+s5Ghoj/wk+m6dPQe69QIxT7I6qWzJw1t0Oo9Dp5TqOz1e5Vua3+X7zm8S3e/Rf+Vv/abPZQFgT+E5dfEk2+InL+hatNo/h1rKCRpMbtdg1NIVfvUyB1ViBY9CQfXmZtUZV7SJfDVR+Qn0730nLxvLTRVrUcIpuNDu3HkfHwkeIayk20OjDkefSV1q5LE/esLcTpw+cugAjmCNfEGep7Rzp9mbhq4N1vYg3X6iX6Jtu3HvD5MJi4mmUe3Dn8jNbANmS3FdR+0EL6SvTHdVR77Z26g3A/mN/Kdr2RyWdVN2UgMfUH/cGv43mDsSkHJtbOuqk8jp87GRdmcV7HElT7pOt+TkKfR8nqZjzTstI2h40z0dt0kwC91zzIEiqbpZwi2Q+JnmHQxHfJhoJCN8neNCa7DpvLZ1UzORpeoPraVDxkWuiG0cCO62NohO5HKxRR7RSgBgkRzHkjAtGtCIiIgBl7Zo5kBA1RlcfpOvwvPMu0ezfZYhmA7j3ZD4HUjyM9ZxI0mHtXZqVaZQ9VPFT4SPPwotLUeV1kuc3LePCZzkByo1vusL3vO+x/ZLRWp1ApCgPmvlNhqwO8eek5fE4UI5CnlmcgZrHcqjgSNfAHxm82q9CpZ7Mt6Iy+yX3ie+fwre9us1MO3pu9JHTwthdRZeZ3+JHG/iYSnSw9eE09EIavVuzHkgHmxv9JvdkXOR9xGc7xxAXUes51aRY5UBJJufE8zO12LgPZoq8d5PMnU/tObnpKc+msbum7ht3x+p+c5vtJ2iWxo0u8WuDa3e4ELfQLzY6SPtFtVh/k0j4Ox3ADf5DceZuOBnLt3RZe8zcT7z+Lcl5CTwcP8A2YXWvEUMa1mzMczndb3VHJefieM1MHV0IP8AdxKNHDAsWJuBvbpv8r3A6GS4WqWLG1h93mRzI4TrM17C2igZA3ESTZT6X5gfKV8fU7mW+/SS4RMogFezX2ZiMlS+7Ug9CI20P9dWGmYlT+tb38mIlHCk5upljEPd0P5836UG/wCHxkMtej0vZuI9pRR/xKpPW2s1l0QecwOzCEYanfl9Z0FXcB4Ty76pnTPpDUhrCqmKnuvBcycH9Ehlmg+olOS0m7wjQqRfxC63kYk9YXEgndxvZOO1jFeKPeKaEgRRyI0Ghg2jGFGtJGQ1xoZmvumrUGkymGpmHN8NeMp4wAqQ3uAFn8VXW3mbeQM83rVi7lyMxYkgcyTcn1+k7/b4b2FQKCSQBoLmxYA2A8CZm7D2B7NPbVAM5HdX8APP81vSVw2plv6FLWc0uzqz6lfI6AeUu4fs07++1hyX6kzssFgNLkTSSgBumVfoumaKJRzWA2EiWAWw0ueJ6y/jKeRSUW7AMbAg2AW4Y38bC01SkgdBYi3XpM1TfsDy/GJao6tuVmBvvIRiAD1tc8yTzmfXJAv9+ocqD8K8T6Tqe02xqpqM9JC6sAWtbQj3rjxtfznL0NXZ23IMq9Tq30E9LjpUujnrfQsUAoFNdbWv4ngPkfSR4dcoIO/eT0klNCT47yfzG9/SQ1wd3r+01E1hEhzvfgN0vv3RrAw9MIuu88OMaxY3PDcP3iYFiifL6CWtnYVq1VVQanuryC72Y+noPGR7PwFSu2RFzczuUeLNwHzno/Z/YiYdd+Z29592n4VHAfP4Tn5eZT/6azLZpYLDhFVBuUAeg3/3zlytvtBprDffPP3e2dAtwgNHYwTEABMOm2ogNFTOoh9BmyhvcSC3CSUm70VQazr4a+HNaI8sUeKdBlh//9k=",
                            
];
let info=[
         ["Hi, Here is RV","14:30",""],
         ["Hi, I'm Tony","13:51",""],
         ["Hi, I'm Laura","13:45",""],
         ["Hi, I'm John","13:20",""],
         ["Hi, I'm Stella","11:11",""],         
         ["Hi, I'm Alicia","10:20",""],
         ["Typing...","10:07",""]
          
];
let message;
let tab=[".t1", ".t2", ".t3"];
onload=()=>{
    

    $(".n1 .list")[0].onmouseover=()=>{
        $(".n1 .list")[0].style.clipPath="circle(100%)";
        $(".n1 .list")[0].style.opacity="1";
    }
    $(".n1 .list")[0].onmouseleave=()=>{
        $(".n1 .list")[0].style.clipPath="circle(30% at 100% 0%)";
        $(".n1 .list")[0].style.opacity="0";
    }
    
    for(let i in tab){
        $(tab[i])[0].onclick=()=>{
            $(".dash")[0].style.transform=`translateX(${i*100}%)`;
        }
    }
    
    $(".fa-search")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(100% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(-101%)";
        setTimeout(()=>{
        $(".n2")[0].style.position="absolute";
        },200)
    }
    $(".close")[0].onclick=()=>{
        $(".searchbox")[0].style.clipPath="circle(0% at 50% 50%)";
        $(".n2")[0].style.transform="translateY(0%)";
        $(".n2")[0].style.position="";
    }
    
    for(let i=0;i<user.length;i++){
        message=`<div class="chat">
                    <span class="avatar">
                        <img src="${link[i]}">
                    </span>
                    
                    <span class="container ${user[i]}">
                        <span class="info">
                            <span>${user[i]}</span>
                            <span>${info[i][1]}</span>
                        </span>
                        
                        <span class="message">
                        <span>${info[i][0]}</span>
                        <span>${info[i][2]}</span>
                        </span>
                    </span>
                </div>`;
                
            $("section")[0].innerHTML+=message;
    }
    $(".container")[user.length-1].style.border="none";
    $(".message")[user.length-1].style=`
    color:var(--green2);
    font-weight:bolder;
    `;
    
    setTimeout(()=>{
    main.style.display="block";
    loader.style.display="none";
    },3000)    
}