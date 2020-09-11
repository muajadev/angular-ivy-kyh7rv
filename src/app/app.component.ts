import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'modelo';
    usuario: string;
    password: string;
    usuarioFoto: string;
    fotoDefault: string;
    esValido: boolean;

    objeto: any[];
    constructor(){
      this.fotoDefault = 'noimage.jpg';
      this.usuarioFoto = this.fotoDefault;
      this.usuario = 'yomerito';
      this.password = 'elpassword';  
      this.objeto =[
        {
        nombre: 'Bestia',
        foto: 'bestia.jpg',
        descripcion:'Bestia, cuyo nombre real es Henry Philip McCoy, es un personaje del universo cinematográfico X-Men. Es un estudiante de Charles Xavier y un brillante científico. Su intelecto incomparable sólo es superado por su agilidad inhumana y su fuerza superior.',
        fecha: new Date().toDateString()
      },
      {
        nombre: 'Tormenta',
        foto: 'tormenta.jpg',
        descripcion:'Tormenta (Storm, en el inglés original), alias de Ororo Iqadi Munroe, es una superheroína ficticia de la editorial estadounidense Marvel Comics. Esta superheroína apareció por primera vez en el cómic Giant-Size X-Men #1 (mayo de 1975), y fue creada por el guionista Len Wein y el dibujante Dave Cockrum.',
        fecha: new Date().toDateString()
      },
      {
        nombre: 'Magneto',
        foto: 'magneto.jpg',
        descripcion:'Magneto (Max Eisenhardt o Erik Lehnsherr) es un supervillano ficticio que aparece en las historietas de los X-Men publicadas por Marvel Comics. Es el antagonista central en la colección X-Men, así como en programas de televisión y películas de esa franquicia. La primera aparición del personaje fue en Uncanny X-Men',
        fecha: new Date().toDateString()
      },
      {
        nombre: 'Logan',
        foto: 'logan.jpg',
        descripcion:'Wolverine, cuyo nombre de nacimiento es James Howlett (también conocido como James Logan o simplemente Logan)4​ es un superhéroe ficticio que aparece en los cómics estadounidenses publicado por Marvel Comics, principalmente en asociación con los X-Men. Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano. Wolverine ha sido representado de diversas formas como miembro de los X-Men, Alpha Flight, Fuerza-X y Los Vengadores.',
        fecha: new Date().toDateString()
      }];
  
    };

    OnClickvalidarUsuario(val1, val2){
      console.log(val1);
      console.log(val2);
    }

    onBluerValidaUsuario(validarUsuario: string, validaPassword: string){
      const resultado = this.objeto.find( usuario => usuario.nombre === validarUsuario );
      if( resultado != undefined || resultado != null )
      {
        this.usuarioFoto = resultado.foto;
        this.esValido= validaPassword.length>=6;
      }else{
        this.usuarioFoto = this.fotoDefault;
        this.esValido= false;
      }
    }
  }
