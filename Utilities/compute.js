export default class compute {
    static convertFromScale(input) {
        switch (input) {
            case 2:
                return "High"
            case 1:
                return "Medium"
            case 0:
                return "Low"
        }

    }

    static convertFromBool(input) {
        switch (input) {
            case 1:
                return true
            case 0:
                return false
        }

    }


    static convertFromStatus(input) {
        switch (input) {
            case 1:
                return true
            case 0:
                return false
        }

    }


    static compareByName(a, b) {
        const bandA = a.name.toUpperCase();
        const bandB = b.name.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }
}