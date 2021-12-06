<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ElementCollection;
use App\Models\Element;
use Illuminate\Http\Request;

class ElementController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Request $request)
    {
        if($request->turbine_id) {
            return response()->json(new ElementCollection(Element::where('turbine_id', $request->turbine_id)->get()));
        } else {
            return response()->json(new ElementCollection(Element::get()));
        }
    }
}
