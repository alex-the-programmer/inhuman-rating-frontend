import React, { Component } from 'react';
import {connect} from 'react-redux';
import Textbox from "../../components/forms/Textbox/Textbox";
import classes from './Search.css';
import InputAdornmentButton from "../../components/forms/InputAdornmentButton/InputAdornmentButton";
import SearchIcon from '@material-ui/icons/Search';
import ProfileCard from "../../components/cards/Profile/Profile";
import * as actionTypes from '../../store/profilesSearch/actions';

class Search extends Component{
    render(){
        return(
           <div className={classes.Search}>
               <Textbox
                    placeholder="Start typing name, phone number, email address or social profile name"
                    autoFocus
                    endAdornment={
                        <InputAdornmentButton onClick={this.props.onSearch}>
                                <SearchIcon/>
                        </InputAdornmentButton>
                        }/>


               <div className={classes.CardsList}>

               </div>
               <h2>Inhuman Profiles: </h2>
               {[<ProfileCard
                    name="Alex M"
                    cities={[{
                        id: 1,
                        name: 'San Francisco',
                        state: {
                            acronym: 'CA'
                        }
                    }, {
                        id: 2,
                        name: 'Sunnyvale',
                        state: {
                            acronym: 'CA'
                        }
                    }]}
                    companies={[{
                        id: 1,
                        name: 'TrueCar'
                    }, {
                        id: 2,
                        name: 'Beepi'
                    }]}
                    schools={[{
                        id: 1,
                        name: 'School 1'
                    }, {
                        id: 2,
                        name: 'School 2'
                    }]}
                    avatar="https://material-ui.com/static/images/uxceo-128.jpg"/>,
                   <ProfileCard
                       name="Alex M"
                       cities={[{
                           id: 1,
                           name: 'San Francisco',
                           state: {
                               acronym: 'CA'
                           }
                       }, {
                           id: 2,
                           name: 'Sunnyvale',
                           state: {
                               acronym: 'CA'
                           }
                       }]}
                       companies={[{
                           id: 1,
                           name: 'TrueCar'
                       }, {
                           id: 2,
                           name: 'Beepi'
                       }]}
                       schools={[{
                           id: 1,
                           name: 'School 1'
                       }, {
                           id: 2,
                           name: 'School 2'
                       }]}
                       avatar="https://material-ui.com/static/images/uxceo-128.jpg"/>]}

               <h2>Social Profiles: </h2>
               {[<ProfileCard
                   socialLogo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU8Wpn///8mTJLw8vctUJT7/P05WJhOaKHX2+clS5IwUpU0VZb2+PqhrMiBkbl8jLUeR5BFYZ1hd6lnfKzy9PiOnL+Il7zm6fHa3+qWo8NTbKN2iLPEytyos82zvdMAPIsVQ47P1eOwutGS6XIEAAAEgUlEQVR4nO3daXuiMBSGYcQQgbiwiGt1Rv//j5yOrctYNQfiIRzmfb5XuC+0KCQhGPS9wPcOsPffCaOh+ObRc2G8yFUSik+NqtVDYbxJjA56kNZpUqx+CtdZL3jfmWx3L5yFvnfqzSXVv8J134CfxN2tMM587w9D2fJGuOnTZ/CcKa/CQ+J7b1j6Oogn4cL43hmW0slFmPfxTfp5YizOwkj53hemzFk47OfHMNAqOgv7dzL8CkL5QSg/COUHofwglB+E8oNQfhDKD0L5dV6oA21u0p8Fta4KdlmojQqTNN+Us+lisZhOZ9uyLDajPDBhkoShSlNDuBXYWaFR2WhxjId3N3NPReP5cnX4OE4WW/utiE4KtUmC6jB+YPuZ9VJ9B4VaqSom6f42FSfUYb4n8wQKtco/6vjECU24s4lkC8NyXhcoSqizY22fKKHRywZAQUIzop3/xArTopFPjtBsGgKlCHX+6Otnn4TpsClQiDA7NAbKEKp1c6AIoR45AEUIs5VNIVxopi5ACcKw+f9RGcK0shmkCxO3Q9h9oZm5AbsvDOnXnGQK3c6FEoRfI3j7LEwa/a4XJNTus+Y6LjSOJ8PuC1XNy78P6vh9ixqn+yjeT6rp7L7pyLYNz/9piLzxsUhClZoHWTfhVWi2NOAkVM0ng3gVpqQf98PcwedZqCj30eaEd+LLjfgUhgeCcOM4H8urkPKNZu+6X36PIeFWRb2hJQ/yKdSp/Ur3wXm3vB5DbT+E69R1I16FuV1YOM+K9PouJQjdp316Fdp/4I/dZ0V2XLjsvXDlvlcdF8YQ2oOQMwghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYNQiNAkT8vsN7njX8///JT/WbLpev5iQWOr0LZo83jkfZas+7Cu19mnOgsXzu3XxIULCdfEhQs/7Ct2Chfuei+s/I+JYhaWvRcSlgYWLiTcQJUtpCwNLFtI+WIuW0g4HQoXTgjjiWQLKevIyxZSRkzJFlJGTIkWjikr5YsWkkZMiRaSBp+KFu57/y6lnA5lC2eUYfyihaQBxKKFpAHEkoW0AcSShbQBxJKFB9LDfyQLj6S5GJKFtNkmkoVb0qw2yUL7nbWWhNGzxoQlzJ7+cRQNaE8Z478H/PxpqAnlHvCLp6nSZgzhPj5nEEJIC0LOIISQFoScQQghLQg5gxBCWhByBiGEtCDkDEIIaUHIGYQQ0oKQMwghpAUhZxBCSAtCziCEkBaEnEEIIS0IOYMQQloQcgYhhLQg5AxCCGlByBmEENKCkDMIIaQFIWcQQkgLQs4gfLNw3lOhVoNvYeT08OtmG2/lGOqzkLjKxDtrRWjKi7ByfvJu3VoRqt1FuHJ/qGnNWhFmy4twUDg+xLx2bQjNdnAVrrK37De9FoQ6Gd4IB7uW36ctCLP94FY4qNolsgt1dl7h6LISzi5r87PILTTJ/vw617V+lmWW6qClMyOjUAdGZdvrU15uVzNaTgqjWip/tQzUaSmo+HfDl9blZHmjul+vybLd9zW21vSV70T2FamkB6H8/gC7Fm2/cqdToAAAAABJRU5ErkJggg=="
                   name="Alex M"
                   cities={[{
                       id: 1,
                       name: 'San Francisco',
                       state: {
                           acronym: 'CA'
                       }
                   }, {
                       id: 2,
                       name: 'Sunnyvale',
                       state: {
                           acronym: 'CA'
                       }
                   }]}
                   companies={[{
                       id: 1,
                       name: 'TrueCar'
                   }, {
                       id: 2,
                       name: 'Beepi'
                   }]}
                   schools={[{
                       id: 1,
                       name: 'School 1'
                   }, {
                       id: 2,
                       name: 'School 2'
                   }]}
                   avatar="https://material-ui.com/static/images/uxceo-128.jpg"/>,
                   <ProfileCard
                       socialLogo="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDhAPDw8PEBAQFQ8PDw8PDRAQEA8QGBYXFhUWFxUYHSggGBolGxUYITEhJSkrLi4vFx81ODMvNygtLisBCgoKDg0OGhAQGi0mHyYtLS0tLy0tLSsrKystLS0tLS0tKystLS0tKy0tLS0tLS0tLSsrLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBgcFBP/EAFAQAAEDAgAIBgwLBAoDAQAAAAEAAgMEEQUGBxIhMUFRE2FxgZGhIiMyQlJTcpKxssHRFBckM2JzlKLC0tNDVIKTFRYlRGR0s+Hw8WOj4zX/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBQQG/8QANxEAAgEDAQMJCAIDAQEBAQAAAAECAxESBAUhMTJBUVJhgaGxwRMUFSJxkdHhM/AjQnLxYkM0/9oADAMBAAIRAxEAPwDcUACAIauqjhYZJXtjY3W57gAFKMZSdoq7AouGspDQS2jizv8AyzAhvMwaTzkci06Wzeeo+5fkrc+gqFdjRXzHs6qUDwYncE0cXYWvz3XfDTUYcIrv3+ZC7Zy5JnvN3Pc473OLj1q5JLggsMTuGIJXHiCLhiCLjxBFwxBK4Ygi48QRcMQRcMQRcMQTuLEEXDEEXFiCLhiCdxYgi4YjmSOabtc5p3tJB6kOz4isdKjxiroTeOqm5HvMjfNfcKmenoz4xXl5Du1zlqwPlIeCG1cQcPGw6HDlYTY8xHIuGrs1cab7n+SSm+cvuDcJQ1MYkgkbIw7QdLTucDpaeIrLqU5U3jJWLE7nrUBggAQAIA5mMGG4aGEyym5OiOMHspHbhxbzsV1GjKrLFAY9h3Ds9bJnzO7EX4OJt+DjHENp4zpPUt2jRhSVo/cg1c5iuuGIJXHiCLjxBK4Ygi48QRceIIuGIJXDEEXHiCLhiCLhiCLhiCLhiCLixBO4Ygi4Ygi4sQRcWIJ3DEEXFiCdxYiouLE9eCsJzUsolgeWOGva148Fw2hQqU41I4yQrWNexVxlir4rizJmW4WK+r6Td7T1enC1OmlRl2czLE7ndXMMEAQ1lUyGN8sjs1kbS9x3AekqUYuTSQGI4w4Zkrah0z7gdzFHfRHHsHLtJ2nmW/RpKlDFd47HMVtx4gi48QSuPEEXHiCVx4gi4Ygi48QRcMQSuPEEXDERFwxBFwxFRcMQRcMQRcMQTuLEEXDEEXFiCLixBO4Ygi4sQTuLEEXFiCdyOJ6sGYQkppmTxOs9huNzhtaRtBUakI1IuMuArG34FwnHV08c8ep40tJ0scNDmnjBXnqtN05uLGe5VgZ9lUwsQ2Kjae67dN5INmDpBP8ACFo6Cnvc39EThG+8zladyzEErjxESuPEEXHiCLjxBK48RWNLiGtBc46mtBJPIAk3YeJ16XFfCEullJN/GBF65CqlqKa4yIuUVznvixBwi7XHGzypmfhuq3rKS5yPtIHoGTmv8KmHLNJ7GJe+0+3+94e1iO+Lev8AGUn82b9NL32n2+H5D2sRfi2rvG0n8yX9NL36n0P+94e1iHxbV3jaT+ZL+mj36n0P+94e1iJ8W9f4yk/mzfpp++0+h+H5D2sRPi4r/Dpf5sv6aPfqfb/e8PaxE+Lmv8Km/myfkT99p9v97xe1iNOTzCH+HPJM78qPfafaHtIkMmIWEhqiY7yZ2e0hSWspdIZxPFUYp4Rj0upJT5GZL1MJU1qaT/2HlF85yJonMdmva5jtrXtLXDmOlXKSe9ErDE7ixBFxYip3FiCdxYgi4sQTuRxLrkvwsY6h1K49hOC5g3StFz0tB80Lh19PKGa5vIi0aksgiYfjfWGbCFS++gSGJvkx9ho80nnW3p4404o6oR+VHHVtyzEEXHiCVx4gi48R0UbnuDGNLnOIa1rQS5xOoADWUnK29hYv+L+TokCStcW30/B43aeR7x6G9K4aus5ofc551uaJfMHYMp6ZubBDHENua0Au5Xa3c64pTlPfJnO5N8T1qAgQAIAEACABAAgAQAIAEACABAHnrqGGdmZNEyRu57Q63GL6jxqUZyi7xY02uBRcP5OWkF9C/NOvgJXEtPE150jkdflC7aWtfCf3Lo1usZ9U074nujkY5j2mzmOFiCtBSTV0dFk96Ik7ixBO4sQTuRxBFxYnowfVmCaKYa4nsk0bQ0gkc40c6U45Rceki4m9fCo/Db0rz+LOcwCeTPe9x1uc5x5zdbi3KxpKIxFyWIIuPEErjxFjjc5wa0FznENa1ouXOJsABvuk3YdrGvYl4qNomCWUB1U8dk7WIge8b7Tt5FmV67qOy4GfWq5uy4FpXOUENVVRwsL5ZGRsGtz3BrRzlNJt2Q1Ft2RWa3KDg+MkNMsxHiotHS8tB5lfHTTfYdEdJUfYcyXKdH3lJIfLlaz0AqxaR87LFonzsgOVA7KIc9X/APNP3Rdbw/ZL3L/68P2NOVB/7k37Uf00e6LreH7D3L/68P2J8Z8n7mz7SfyI90XW8A9yXW8BPjPk/c2faHfkR7ounwD3JdbwD4z5P3Nn2h35E/dF0h7kut4B8Z8n7mz7Q78iPdF0+Ae5Lp8BRlPf+5M+0n8iPdF1vAPcl1vAcMqDttEPtZ/TS9zXW8P2L3P/AOvD9k0WU9nf0jwPoztd6WhJ6R8zIvRvmZ06LKHQSGz+Gh45IrjpYXdahLSzXDeQlpai4byz0dbFOzPhkZIw98x4cL7tGo8S55RcXZo55RcXZonSEcLGrFqKvisbMmaDwUttI+i7e07uhXUazpvsLKdRwfYY1WUr4ZHxStLZIyWvadh9o2g7QQtaMlJXR3qzV0QqVxWBO4rAi5GwFO4rHf8A6xyb+tUexRX7Mr6lc78QSuPEErjxBFyWJoWS7AQOdXSC9iY6e41HU9/4R/EuPVVP9F3nDrKlvkXeaOuI4DhY14yxUEVzZ8z78FFe1/pO3NCtpUnN9hfQoOq+wyDC2FZ6uThJ5C92nNGpjBua3UB/w3WhGKgrI1oUowVoo8SlcniCVx4gi4Ygi4Ygi4Ygi4Ygi4YgncWIIuGIIuLEE7hiCLixPTg7CE1NIJYJHRvG1p0OG5w1OHEUpJSVmQlTUlZo1rE7Gxle3g3gR1LBdzB3MjfCZfZvGzj1rPrUXDeuBmV9O6e9cCzKg5yiZT8Bh8QrYx2cVmTW76ImwdytJ6Cdy7NLVs8GdWmnvxZmK77ndiCdyNhU7kbAncVgRcWIiouduIIuPEErksRWtJIDRdxIDQNpOgBK47W4m+YIoW01PFA3VExrL+Ebdk7nNzzrMlLJtnn6k85OXSTVdSyGN8rzZkbXPedzWi59CSV3ZCjFyaS5zCMMYTkq6iSok7p50NvoYwdy0cQHtO1aMUoqyPQU6KpxUUeJSuWYgi48QSuGIIuPEEXDEEXDEEXDEEXFiCdwxBFxYgi4sTv4oYtOwhK4FxZDHYyyAadOprb6M42OnZ0A11KuC7Tm1NZUV2s0qLEnBrWZvwYO3udJIXnjvfRzWXI68+ky3qqrd7lKx2xNFGz4TTlxguBIxxu6K5sCHbW3sNOkXGu+jpo18tz4nbptT7R4y4+ZUqKrkglZNE7NkjIcw8fHvB1EbQSr2k1ZnXKCkrM3fA+EG1VPFUM0CRoda9812pzeUEEcyzJxxbRhVIOEnF8xPVU7ZY3xvF2SNcxw3tcLEdBSTs7oim07owGtpnQyyQu7qJ74yd5aSL9S1oyurm2vmSaIVK4WBO5FoE7kWhU7isNXPc7sQRcliCVx4nXxQpxLhGkYfGNf5gMn4FXUlaLKdT8tGT7PPcbmuA86VPKbWcFg4sBsZ5I4tG7S881mW51bRXzHds+nlWv0K/p6mQrsub2IIuPEErhiCLhiCLjxBFwxJ6KimnNoYpJSNB4ONz7HjI1c6TklxITlGG+TS+p2ocScJu/upaN75oR1Z11H2sek5pa3Tr/bwf4FlxHwm3+7Z3kzQnqLgUKtHpEtbp3/ALeDOPX4MqKf5+CWLZd8bg0nidqPMVNST4HRCcKnIaZ5U7k8QRcWJq2Skt+AyW7rhn5+++Yy3VbrXLX5RibSTVVX6PyXRUGecnG0t/o6sztXATWv4Wac3nzrKdPlou01/bRt0owtaNz0OJqeSmrLqSWIn5qQlo3MeAfWDulceoXzXMfaELTT6UXdc5wGN5RaYR4TlI1SNiltytzT1tJ51oUJXgjZ0jypIrSvudFgTuRsCdyLQIuKwi57nfiCVyWIIuPEs+TaPOwnGfAZM/7ub+JVVX8px7R3UH9UbGuQ86ULK27tFM3fI53Qwj2q6jxZrbJV5y+nqZlZX3NywWRcLBZFwsFksgsenB9BLUStihY6SR2po2DaSdQHGUOSRCpUjTjlJ2RpeL+TyCIB9WRUSa+D0iBp5Nb+fRxKmVVvgYmo2nOW6nuXj+u77lziiaxoaxrWtGgNaA1oHEBqVJmNtu7HoECAEc0EEEAg6CCLghAFSw/iDS1ALoAKaXX2A7U48bNQ5W251bGq1xNChtGpDdP5l4/f8mYYYwTPRy8FOzNdraRpZI3e120dY22XRGSaujco1YVo5Qf97T3YqYxyYPmLg3PiksJYr2uBqc07HC55b23EKcVJFWq0irxtwa4M0eLH/BpbnGZ7DtY6CUuHF2LSOgrn9lIxns7UJ2t4opmOmOXw1vAQNcynBDnl9g+Yg3GjY0HTvOjVayvp08d74mjpND7L5pcfIqCuudti/ZI5LTVbfCZC7zS8fiVGo4Iy9px+WL+voaYuUxzKMqzLV8Z3wR9T5PeuzTv5e82dn76T+voimLoudrQJ3ItCp3ItAncjYRc1zRsFkrjsLZLIZb8lrf7RdxQSn78Y9qqqP5TO2p/B3ryZrSoPOmfZWz2NIOOc9AZ71ZTdjZ2Qt8+71M5zVZkbQualkAZqMgPTg+gkqJWQxNznvNgNQG8k7ABpKMiFSpGnFzlwRs2LeAIaGHg4xnPdYyykdlI72NGwbOW5NLlc8xqdTKvO74cy6DrpHMeLCeFqelbnVEzIwdQJu53ktGk8wRYtpUKlV2grlZqco9G02ZFUSfSzWMael1+pSxO+Oyqr4tIbBlJpSbPhqGcYEbgPvX6kYjlsmquEl4/gseCcO0tWO0TNeRpLNLZAONjrG3Gk1Y4a2mq0uWreX3OkkUHPw3giGshMMzbg6WuHdxu2Oadh9Oo6E4yad0XUK86M8o/+mK4cwRLRzugl1jS1wFmyMOpw6NWwghdKnc9PQrRrQU4/+HgspXLhLJ3FYE7hYuuSd3y2Yb4HHokZ71VW5Jl7VX+JPt9GaquYwTL8rTflNOd8Th0O/wB11UODNnZm+EvqUVdFzSaBO5FoE7kGgRcVh+auTI7hc1RyAXNSyGXDJa35fIf8PJ/qRKEndGZtX+Bf9LyZqqgeeM8ys66Mf5k/6SaZt7H4T7vUoGankbIZqWQC5qMgNPyb4EEMHwp47ZOOwvrbDfR5xGdyZqLnn9p6jOfs1wXn+uH3LkkZZU8c8bPgg4CCzqhwuSdLYWnUSNrjsHOdgIaWh0PtvnnyfP8ARl1TM+V5kke573d095Jcef2J3PQRjGKxirIisjIkGankAsbnNcHNJa5pu1zSWuad4I0gouJpNWZpWJOOBnLaWqI4U6IpdA4X6Ltztx28utMwtdoPZr2lPhzro/Rd0jJKzj7gMVdIXtF5oA6SOw0ub37OcDpAUoux3bP1Hsqtnwe5+jMfsrcj0wlk7iEsncC4ZK//ANB/+Xl/1IlGo/lM3av8C/6XkzWFQeeMyyuDt1L5E3rN966KHBm3snkz+q9ShK+5qNAnci0Clci0CLisThq4MjqFzUsgFzVHIC45Lm/LZfqHevGle5l7W/hX19GagmefM8yrd3SclR6Y1GTsbmx+E+71KJmqORsi2SyAnwfRmaaKEXBleyO42AkAnmGnmQmV1J+zg59CubpFGGNa1oAa0BrQNQA0AK08e227s8mGcINpqaWd2ng2kgeE46GjnJA50m7FlCk6tRQXOYnUSvke6SQlz3kuc47XHWq8j10YqKUY8ER5qMiQWRcBLJ5AGankIBcEEEgixBBsQRqIOwp5BY2fFXCvwujjlNuEF2S28Y3QTbZfQf4k0eU1lD2NVxXDivoddM5jD8ZcHinraiECzWvJYLaAxwD2gcgcBzJ3PW6Wp7SjGXZ5bjmEKVy8SylcC25Lx/aDvqJfXiSk9xm7V/gX1XkzV1WedM1yuDtlJ5M/pjV1J8Tc2RyZ93qZ+QrkzXEUrkWhU7kWgTuKx681ZjkXCgJZDFzVG4FxyYj5ZL9S712KUHdmVtb+FfX0ZpisPPme5UvnKXyZvSxVVHY3dj8mfd6lIzVVkbAZqWQHexGhzsIwfR4R3RG63WQpwd5HFtF200u7zRra6Dy5UMpkxFJGwd/KM7jDWuNum3Qq6rsjV2TG9VvoRmuaqLnoAsjIAsncBLIuAZqeQCWTuBfslkxtVRbAYpAOM5zXeq1WwdzE2xHkS+qL6pmKZZlMitXtI7+GNx5c57fQAotnotlO9DvfoVMhGRpDSFJMC2ZMR/aDvqJfXjTuZu1f4O9eTNVSPOmcZWh2yj8mo9Masgzb2RyZ93qZ+QrEzYEIU0wG2UkxCJ3Cx0A1ZORMdmqNwFzVHIC3ZNB8sk+pf68aspO8jL2t/Cvr6M0pdB54z/KcO2U3ky+li567s0bux+TPu9SlZq58jZCyWQHdxIdm4Rg4+Fb/AOt3tCspS+dHDtFX00u7zRrC7Ty5UMpUJNLE4d7KAeIFrvaB0qivybmrsiVqsl2eqM6zVy5HoRLIyALJ5AJmp5AFk8gEsnkIvWS+E3qn7O0sHL2ZPpHSr6XOYu2JL5I/X0L6rjEMwyluvXMHgwxg8pe8+iyqm956LZK/wP6vyRUiFFM0xCFJMC1ZMx8vd9TL68ammZm1f4O9eTNTUjzpnOVju6Tyaj0xppm5sjkz7vUoJCmmbA0hTTENIUkwEspXA6YasZyJi2UcgFso5AWzJuPlkn1L/XjV2nfzdxl7W/gX/S8maQuw86UHKWO2U3ky+lq49U7NG9sfkz7vUplly5GwLZLID04OqOBnil8W9jzba0HSOi6lGdmmV1qftKcodKNma4EAg3B0gjaFqnjmrbjw4cweKmmlh0XcOxJ2PGlp6QFCpHKLRdpq3sasZ9HlzmQSRlpLXAhzSWuadYI0EFZl7Hr001dDbIyASyMgEzU8gEsncBCFK4GtYoYLNLSMY4WkfeWQbQ51rDmAA5iu6nHGJ5XXV1WrNrgtyO0rDjMdxpq+HrZ5Abtzsxu7NYA244jYnnXJKV5M9Zo6Xs6EY9l/vvOQQhM6RCFJMC1ZNB8vd9RJ68asg95mbV/gX/S8magrTzpnWVb5yl8mb0sSubmyOTPu9ShkKSZsDSFJMBpCmmISylcDqALDbJi2UXIBbJZAWnJ0Plr/AKmT141fpX8/d+DM2t/Av+l5M0daB5womUkdspvJl9LVwax2cTe2NyZ93qU7NXFkbIZqWQBmoyA0jEfCgmpxC49sgs3jMfeHm1cw3rT0tXONudHmtp6f2dXNcJefP+SyLqM0qON+LBmJqKcds/aRj9oB3w+lxbeXXyaig5fNHia+z9eqf+Opw5n0fooLmEEgggjQQRYg7iFnXPQLfvQlk7gJZO4CWTuBdcT8VXZzampbm5tnRROGnO2OcNltgXbQovlSMTaG0FZ0qT+r9EXpdhhnFxtwt8FpXEG0sl44htDjrdzDTy23qurPGJ2aHT+2qpPgt7/vaZLmrhTPVCEKaYDSFJMRasmg+XSfUSevGrqT3mZtb+Bf9LyZpqvPOmc5U/nqbyJPWaoSZu7I5E/qijEITNcaQppgNIU0wEsncDrALCbJigKNwFDVHICzZP8ARWnjikH3mH2Lp0b/AMnd+DM2t/8Az968maMtQ82UjKM3s6bkm9LFm692ce/0N3Y3Jn3epTrLPyNsM1LIBc1GQHqwZWvppmzR626wdTmnW08R9ynTquEskU16Ma0HCRqOCsJR1MQljOjU5p7pjtrTxrcpVY1I5RPJ6ihOhPCX/p7FYUnMwrgKmqtMsfZ6uEYc1/SNfPdVVKEKnFHVQ1lWjui93RzFenxCF+11JA3PiDj0gj0Lleh6JGjDbL/2h9n/AOjYcQdPZ1OjcyGx6S72IWi6ZeA5bZ6sPH9HfwVi3S0xDmMznjVJIc5w4xsB5AF006EIb1xM+vrq1bc3ZdCOurjjPPXVkcEbpZXBrG6ztO4AbSdyjKSirsspUpVZKEVvMpw/hZ9ZMZHaGjsY2X7hnvOsn3BZtSq5yueq0umjQp4rjzvpOYQopnQNIU0wEIUkwLZk0b8rlO6Ejpez3Loo8TK2u/8AFH6+jNIXSeeM3yoH5TAN0RPS4+5VTe839kL/AByfb6FLISTNYYQppiGkKaYCWUrgdgBeebJigKLkA4NUXIZ38SDauZ9Jsg6r+xdWil/mXeZ21FfTv6o0hbJ5gqGUOK7Kd+50jekA/hWbtJbos2tjS+acfp/fEpWasnI3hc1K4BmouAZqLgevBtfLTScJE6x1OadLXjc4bVZSrSpyyiU16EK0cZr9F7wRjPBOA15EMngvPYk/RdqPIbFbNDW06m57n/ec87qdm1aW+O9dnqjursM8EACABAHHwxjJT0wILuEkH7KMgkH6R1N59PEuerqYU93F9B26fQVa2+1l0v06TPcNYXmq350hs0dxG3uGe88f/SzalaVR3Z6LTaWnQjaPHnfOzmkKKZ0DSFJMBpCmmIaQppgXLJnH22oduZG3pLj+FdWn4sx9sP5ILtZoC6jBMyylOvWsG6FnryFUVH8x6LZK/wAD+r8kVIhRTNMYQppgNIU0xCKVwOyAvOORYOAUWwHAKNwOpi1JmVsDjqzs3zgWjrcrtLPGtF9vnuOTXRy0812eW809eiPJHCx0ps+jJ2xuZJ+E9TlxbQhlRv0O/oaOy6mFe3SmvX0M/wAxYR6W4uYgVxcxILiZiAuGYmFxpYkO57KPClTBoime0DU0nOaORrrgK6nqKlPkyZRV01Gry4r1+6OkzHCrGsQu43Ruv1OC6VtGsuj7fs5XsnTvpXf+gkxyqzqEDeMRvv1uKPiNbs+37BbJoLnf3X4OXW4bqptD532PetIY224htr86qnqas+MvQ6qejoU98Yrz8zm5qrTOkaQppgNIUkxDSFNMBpCmmA0hSTEaDk3pc2CaUj5x4aONrB73O6F36ZfK2YG153qRj0LzLeukyDKMfJs/CEo8ARs+6HHrcVy1H8x6fZsbaePbd+JXSEkzuGkKaYDSpoBqlcR3AF5m5YPDUhXHhiBXJIwWkOGgggg7iNIQm07og7NWZqdFUCWJkg1PaHcl9YXp6c1OCkuc8hVpunNwfMOqIWyMcx3cvBaeQiyc4qUXF85GE3CSkuKM1q6N0Ujo390w25dx5CNK8zUg6cnF8x6ynVVSCnHnIsxQJ3DMQK4ZiB3ELEBcaWIHcaWIHcYWoHcYWpkkxhaglcaQmmA0hTTAaQppgNIU0xDCFNMB0EDpHtjYM57yGtG8lWRTbsiM5KEXKXBGv4KoW08EcLdTGgE+E7W485JPOteEcYpHj69V1ajm+c9EsjWNc9xs1oLnE6gALkqTdiuMXJpIxXCFSZppJjrke99jsBNwOYaOZcDld3PY0qapwUFzKx5SpJlgwqaENKsQDbJgWFrV5obZI1iRBskDECuPDEEblrxPrtBp3He+Pk75vt5ytbZ1f/8AJ/Vev5MbadHeqq+j9PwWdapkHKw5gdtQA5tmytFmuOpw8E/80Lj1WlVZXXKOzSat0XZ8kp1RSPjcWPaWuGw+zeFhzhKDxkrM3YVYzWUXdEeYoE7iZiAuIWIHcaWIHcYWoHcYWoJJkbmoJJkbmpkkyNzUEkxhCaYxpCmmA0hTTAdBTvleGRsc951NaLn/AK41bFOTsiE5xgspOyNBxVxaFL22WzpyLADS2IHWBvdvPMNt9TT6fDe+J5zXa/23yQ5Pn+iyLqM0qWUHCwjgFMw9nNpfbW2Ie8i3IHLn1E7LE1dlafOftHwXD6/r8GcFcqPQjSpoBhViENKmgGqQFpMdiRuJHQvNtWditSurjmtSE2SNYgg2SBiBXJYSWuDmmzmkEEbCnGTi7riQlaSs+BdcE4TbO3TYSDum+0cXoXoNLqY1o9vOjz+p0zpS7OY6C6jmIqinZIM17Q4biNXJuUJ04zVpK5OFSUHeLscqfFuE9y57OK4cOvT1rins2k+S2jshtGouKTPI/Fc7JgeWMj2qh7MfNLw/ZetpLnj4/oidixLskj+97lH4ZU6yJraUOhjDivN4cXS73JfDavSvH8D+JU+h+H5GnFWfw4vOf+VL4bV6V4/gl8TpdD8PyNOKk/hw+c/8qfw2r0rx/A/ilLofh+RpxRn8ZD0v/Kj4bU6V4/gfxWl0Pw/I04nz+Mi6X+5Hw2p0ofxal1X4Cf1Mm8bF0O9yfw2fWQ/i9PqvwE/qRL46PzXFP4ZPrIPjFPqsUYjP21DRyQk/iUls2XW8P2Re2Y80PH9HupcSKdumSSSTiBDGno09a6IaCC4ts56m16r5KS8f79jv0VBDA3Nhjawbc0aTynWeddcKcYK0VYzqtapVd5u56VMqOTjDhyOjjubOldfg476XHedzRvVVWqqa7Tr0mklqJWXDnf8AecyutqnzSOlkdnPebuPoA3AalnOTk7s9RTpxpxUYrcjzFTRMaVNAMKsQhhU0B0v6Gk3Kdjm95iWXC1PmVMzfpucOR3ZDqKwdTHGrJdvnvK9NUzoxfZ5biBrVQWNkjWoItkjWoINkgYgi2SxEtIc0kEaQRoITjJxd095GVpKzLBQYbBs2YWPhgaDyjYtahtFPdU+5l1tE1vh9jsRyNcLtIcN4NwtKMlJXi7nDKLi7NDlIQIAEACABAAgAQAIAEACABAAgCOeZkbS57msaNbnODQOcpOSirslGEpO0VdlXwxjrEwFtM3hX6s9wIjB9Luoca46msit0N/kaun2VOW+ruXRz/r+7iiVtVJNI6SVxe92sn0DcOJcTk5O7N2nTjTioxVkeYqSJDSrEAwqxAMKsQh1PAZZGRN1yObGOVxAHpU0RnNQi5Pm3m1/0bD4AXRY8j7afScLG6j7JkwGg9g/l1tPpHMFk7Spb1UX0foaWza25039UcFrVlmk2Stagg2SNagi2Stagg2SBiCNxwYgVx7C5pu0lp3gkHqTjKUXeLsRdpbmj0swlO3v7+UAf910x1teP+xU9NSfMSDDcw2Rn+E+9WraVXoX97yHuVPtF/p+TwGdan8Tn1UHuMOljTjE/xbfOKfxOXVQ/h8esNOMz/FN88+5HxOXV8R/Do9YYcaX+Jb559yPicur4j+GR63gMONj/ABLfPPuR8Tl1fEl8Lj1n9hjsbpPEs893uR8Tl1V9yS2VDrP7EbscZfEx+c5HxOfVRJbJp9ZkTsc59kUX3z7UviVTqomtkUus/AgfjpVbGQD+B5/Eo/EavQvH8li2RQ6X91+DxVGNNa/9rmDcyNg6yCVF6ytLnLobN00f9b/Vs49TUPkOdI97zve4uPWq3Jy3t3OuEIwVopL6EBUkSGFWIBhU0IaVYgGFWIBhViEWjJ5gwy1fDEdhTjOvsMjrho5hc8wV1NbzN2pWwpYLjLyNQVx5whq6dssbo3anC3JuPMVCpTVSLi+cnTqOnJSXMUippXRPMb9Y27CNhHEvNVacqcnGR6GFRVIqUQaFAbJWhBWyVoQRZK1qCDZIGIIXFLUBcjcEE0ROQSRE5BNELkE0ROQTRE5BNELkE0ROQTRC5BNETkyaIihEhhViAYVYgGlTQhhViAYVYhDCrEA0qaAWngfK9scbS57yGtaNZJVsURnJQi5Se5Gw4u4JbR0zIRYu7qR47+Q6zyagOIBdUVZHk9VqHXqOb7vodNM5wQB4cKYObO3c8dy72HiXNqdNGtHt5mdGn1DpPs5yqzQOjcWPFiOsbxvCwKlOVOWMlvNmM4zWUWK1QBkrSggyVpQQaJA9BGw1zkDsRucgkkROcgmkROKCaRE4oJohcUE0ROKCaInFBNELigmiJxQTRC4pk0RlNDGFWIBpViEMKmgGFWIBhViENKmgFggfK9scbXPe42a1ouSf+bVbFXIznGCcpOyNOxSxYbRt4SSzqhwsSNLYx4LfaV1Qhieb1utdd4x5PmWRWGeCABAAgCGqpWStzXtuNh2jkOxV1aMKqtJFlOrKm7xZw6rAb26YznjcbB3uPUsmts6cd8N68TQp62Mt093kc+SNzO7a5vlAhcE4ShylY6oyjLku4geojsOz0CsIXoCwxz0EkiNzkEkiJzkE0iNzkEkiJzkE0iJzkE0iJxQSSIXFBNETimTSInFBMYSppAMJViQDCppCGlWJAMJU0A6CB8pzY2PkO6NjnnoCtim+BCc4wV5O313FhwXiRVSkGa0DNudZ0hHE0aBznmXTCjJ8TOrbUpQ3Q+Z+BesDYDp6NtoWdkdDpHaZH8p3cQsF0xgo8DE1GqqV3eb7uY6Skc4IAEACABAAgAQAyXuSoy4DjxKvhDulganlGxR4HkXKXiFAxjkDGFBJEbkEiNyCaInIJoicgkiJyCaInIJoicgkiMpokMKsQDCrEAwqaENKsQHQwJ84F0UuJy6nkmp4M+aatGPA8vW5bPUpFQIAEACABAH/2Q=="
                       name="Alex M"
                       cities={[{
                           id: 1,
                           name: 'San Francisco',
                           state: {
                               acronym: 'CA'
                           }
                       }, {
                           id: 2,
                           name: 'Sunnyvale',
                           state: {
                               acronym: 'CA'
                           }
                       }]}
                       companies={[{
                           id: 1,
                           name: 'TrueCar'
                       }, {
                           id: 2,
                           name: 'Beepi'
                       }]}
                       schools={[{
                           id: 1,
                           name: 'School 1'
                       }, {
                           id: 2,
                           name: 'School 2'
                       }]}
                       avatar="https://material-ui.com/static/images/uxceo-128.jpg"/>]}
           </div>
        )
    }
}

export default connect(state=> {
    return {
        profiles: state.profileSearch.profiles,
        loading: state.profileSearch.loading,
        error: state.profileSearch.error
    }
}, distpatch=> {
    return {
        onSearch: searchTerms => {console.log(searchTerms);distpatch(actionTypes.SEARCH_PROFILES_START, searchTerms)}
    }
})(Search);