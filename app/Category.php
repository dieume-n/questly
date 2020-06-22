<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['name'];
    
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function getPathAttribute()
    {
        return asset("api/categories/$this->slug");
    }

    /**
     * Always capitalize the name when we save it to the database
     */
    public function setNameAttribute($value) {
        $this->attributes['name'] = ucfirst($value);
    }
}
