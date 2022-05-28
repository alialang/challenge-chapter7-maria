class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="carContainer align-items-stretch">  
      <div class="card p-3 mb-3 flex" style="height:550px">
        <img src=${this.image} alt="" style="height:250px; object-fit: cover;">

        <div>
          <p class="fw-bold mt-1">${this.available}/${this.model}</p>
        </div>
        <div>
          <h5 class="fw-bolder">Rp. ${this.rentPerDay} / hari</h5>
        </div>
        <div>
          <p class="description" title="${this.description}" style="
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;">${this.description}</p>
        </div>
        <div>
          <span><i class="bi bi-people me-3"></i>${this.capacity} Orang</span>
        </div>
        <div>
          <span><i class="bi bi-gear me-3"></i>${this.transmission}</span>
        </div>
        <div>
      
        <span><i class="bi bi-calendar me-3"></i>Tahun ${this.year}</span>
        </div>
        <button class="btn btn-success"> Pilih Mobil</button>
      </div>
    </div>
    `;
  }
}
