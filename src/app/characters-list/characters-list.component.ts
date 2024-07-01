import { Component, OnInit } from '@angular/core';
import { Character } from '../character.model';
import { CharacterService } from '../characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private charactersService: CharacterService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe({
      next: (data) => this.characters = data,
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }
}