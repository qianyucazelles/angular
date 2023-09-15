<div class="form-group">
<label for="nom">nom</label>
<input type="text" class="form-control" id="nom"
       required
       [(ngModel)]="model.nom" nom="nom"
       #nom="ngModel">
<div [hidden]="nom.valid || nom.pristine"
     class="alert alert-danger">
  nom is required
</div>
</div>