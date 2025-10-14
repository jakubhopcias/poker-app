"use client"
import { useState } from "react";
import Plus from "../Plus";
import PlayerInterface from "@/app/lib/PlayerInterface";

export default function Players() {
    const [name, setName] = useState('');
    const [players,setPlayers] = useState<PlayerInterface[]>([])

    function addPlayer(){
        setPlayers([...players, {name:name,bets:1,chips:0}])
        setName('')
    }
    return (
        <section  id="players">
            <h2>Gracze</h2>
            <h4>Dodaj gracza</h4>

                <label htmlFor="name">Imię: </label>
                    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required />

                    <Plus onClick={addPlayer}/>

            <h2>Dodaj wpisowe</h2>
            <table>
                <thead>
                    <tr>
                        <th>Gracz</th>
                        <th>Zakłady</th>
                        <th>Dodaj zakład</th>
                    </tr>
                </thead>
                <tbody>
        {
            players.map((player :any ,index:number) =>{
                return (<tr key={index}>
                    <td>{player.name}</td>
                    <td>{player.bets}</td>
                    <td><button>+</button></td>
                </tr>)
            })
        }
{/*
<?php 
                    foreach($_SESSION['players'] as $player => $data){
                        $p_safe = htmlspecialchars($player);
                        $z_safe=htmlspecialchars(json_encode($data['total_bet']));
                    echo "<tr>";
                    echo "<td>$p_safe</td>";
                    echo "<td>$z_safe</td>";
                    echo "<td>
                            <form class='table-form-for-button' method='POST'>
                                <button class='plus' type='submit' name='add_bet' value='$p_safe'>+</button>
                            </form>
                        </td>";
                    echo "</tr>";
                    }
                    ?>*/}
                    
                </tbody>
            </table>
        </section>
    );
}