<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Category extends Model
{
    use Sluggable;

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    
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
